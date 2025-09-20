import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

// Helper to convert a File to a Buffer
async function fileToBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const orderType = formData.get("orderType") as string;
    const institutionName = formData.get("institutionName") as string;
    const contactName = formData.get("contactName") as string;
    const contactTitle = formData.get("contactTitle") as string;
    const contactPhone = formData.get("contactPhone") as string;
    const contactEmail = formData.get("contactEmail") as string;
    const productType = formData.get("productType") as string;
    const quantity = formData.get("quantity") as string;
    const designBadgeSize = formData.get("designBadgeSize") as string;
    const designRibbonColor = formData.get("designRibbonColor") as string;
    const designFontColor = formData.get("designFontColor") as string;
    const designRibbonEnd = formData.get("designRibbonEnd") as string;
    const description = formData.get("description") as string;
    const deliveryAndPayment = formData.get("deliveryAndPayment") as string;
    const billingInfoName = formData.get("billingInfoName") as string;
    const billingInfoAddress = formData.get("billingInfoAddress") as string;
    const billingInfoEmail = formData.get("billingInfoEmail") as string;
    const shippingInfoAddress = formData.get("shippingInfoAddress") as string;
    const shippingInfoZip = formData.get("shippingInfoZip") as string;
    const shippingInfoContactPhone = formData.get("shippingInfoContactPhone") as string;
    const otherRequest = formData.get("otherRequest") as string;
    const promDate = formData.get("promDate") as string;
    const orderDate = formData.get("orderDate") as string;

    const grafika = formData.get("grafika") as File | null;
    const tavalyiFoto = formData.get("tavalyiFoto") as File | null;

    const attachments = [];
    if (grafika && grafika.size > 0) {
        const grafikaContent = await fileToBuffer(grafika);
        attachments.push({
            content: grafikaContent.toString("base64"),
            filename: grafika.name || "grafika.pdf",
            type: grafika.type || "application/pdf",
            disposition: "attachment",
        });
    }
    if (tavalyiFoto && tavalyiFoto.size > 0) {
        const tavalyiFotoContent = await fileToBuffer(tavalyiFoto);
        attachments.push({
            content: tavalyiFotoContent.toString("base64"),
            filename: tavalyiFoto.name || "tavalyi_foto.jpg",
            type: tavalyiFoto.type || "image/jpeg",
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
      replyTo: contactEmail,
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