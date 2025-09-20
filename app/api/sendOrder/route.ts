import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";
import formidable, { Fields, Files } from "formidable";
import fs from "fs/promises";

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

export const config = {
  api: {
    bodyParser: false,
  },
};

async function parseForm(request: Request): Promise<{ fields: Fields; files: Files }> {
    const form = formidable({});
    const chunks: any[] = [];
    const reader = request.body!.getReader();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
    }

    const buffer = Buffer.concat(chunks);

    return new Promise((resolve, reject) => {
        form.parse(buffer, (err, fields, files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
    });
}


export async function POST(request: Request) {
  try {
    const { fields, files } = await parseForm(request);

    const {
        orderType,
        institutionName,
        contactName,
        contactTitle,
        contactPhone,
        contactEmail,
        productType,
        quantity,
        designBadgeSize,
        designRibbonColor,
        designFontColor,
        designRibbonEnd,
        description,
        deliveryAndPayment,
        billingInfoName,
        billingInfoAddress,
        billingInfoEmail,
        shippingInfoAddress,
        shippingInfoZip,
        shippingInfoContactPhone,
        otherRequest,
        promDate,
        orderDate
    } = fields;

    const attachments = [];
    if (files.grafika) {
        const grafikaFile = Array.isArray(files.grafika) ? files.grafika[0] : files.grafika;
        const grafikaContent = await fs.readFile(grafikaFile.filepath);
        attachments.push({
            content: grafikaContent.toString("base64"),
            filename: grafikaFile.originalFilename || "grafika.pdf",
            type: "application/pdf",
            disposition: "attachment",
        });
    }
    if (files.tavalyiFoto) {
        const tavalyiFotoFile = Array.isArray(files.tavalyiFoto) ? files.tavalyiFoto[0] : files.tavalyiFoto;
        const tavalyiFotoContent = await fs.readFile(tavalyiFotoFile.filepath);
        attachments.push({
            content: tavalyiFotoContent.toString("base64"),
            filename: tavalyiFotoFile.originalFilename || "tavalyi_foto.jpg",
            type: tavalyiFotoFile.mimetype || "image/jpeg",
            disposition: "attachment",
        });
    }

    const messageBody = `
      <p><strong>Típus:</strong> ${orderType}</p>
      <p><strong>Megrendelő intézmény neve:</strong> ${institutionName}</p>
      <h3>Kapcsolattartó személy</h3>
      <p><strong>Név:</strong> ${contactName}</p>
      <p><strong>Titulus:</strong> ${contactTitle}</p>
      <p><strong>Telefonszám:</strong> ${contactPhone}</p>
      <p><strong>Email cím:</strong> ${contactEmail}</p>
      <h3>Termék</h3>
      <p><strong>Megnevezés:</strong> ${productType}</p>
      <p><strong>Darabszám:</strong> ${quantity}</p>
      <h3>Design</h3>
      <p><strong>Jelvény méret:</strong> ${designBadgeSize}</p>
      <p><strong>Szalag szín:</strong> ${designRibbonColor}</p>
      <p><strong>Betűszín:</strong> ${designFontColor}</p>
      <p><strong>Szalagvég:</strong> ${designRibbonEnd}</p>
      <p><strong>Leírás:</strong> ${description}</p>
      <h3>Átvétel és fizetés</h3>
      <p><strong>Módja:</strong> ${deliveryAndPayment}</p>
      <h3>Számlázási adatok</h3>
      <p><strong>Név:</strong> ${billingInfoName}</p>
      <p><strong>Cím:</strong> ${billingInfoAddress}</p>
      <p><strong>Email:</strong> ${billingInfoEmail}</p>
      <h3>Szállítási adatok</h3>
      <p><strong>Cím:</strong> ${shippingInfoAddress}</p>
      <p><strong>Irányítószám:</strong> ${shippingInfoZip}</p>
      <p><strong>Telefonszám:</strong> ${shippingInfoContactPhone}</p>
      <h3>Egyéb</h3>
      <p><strong>Kérés, megjegyzés:</strong> ${otherRequest}</p>
      <p><strong>Szalagavató időpontja:</strong> ${promDate}</p>
      <p><strong>Megrendelés dátuma:</strong> ${orderDate}</p>
    `;

    const msg: MailDataRequired = {
      to: "jelvenyrendeles@gmail.com",
      from: "info@jelvenydepo.hu",
      replyTo: contactEmail as string,
      subject: `Új ${orderType}`,
      html: messageBody,
      attachments,
    };

    await sgMail.send(msg);
    return NextResponse.json(
      { message: `Email has been sent` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
  }
}