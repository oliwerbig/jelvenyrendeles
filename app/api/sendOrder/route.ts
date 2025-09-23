import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

export async function POST(request: Request) {
  try {
    const data = await request.json();

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
      orderDate,
      grafika, // This is now a URL string
      tavalyiFoto, // This is now a URL string
    } = data;

    const attachmentUrls = [];
    if (grafika) {
        attachmentUrls.push(grafika);
    }
    if (tavalyiFoto) {
        attachmentUrls.push(tavalyiFoto);
    }

    const messageBody = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <p><strong>Típus:</strong> ${orderType}<br>
        <strong>Megrendelő intézmény neve:</strong> ${institutionName}</p>
        
        <h3>Kapcsolattartó személy</h3>
        <p><strong>Név:</strong> ${contactName}<br>
        <strong>Titulus:</strong> ${contactTitle}<br>
        <strong>Telefonszám:</strong> ${contactPhone}<br>
        <strong>Email cím:</strong> ${contactEmail}</p>
        
        <h3>Termék</h3>
        <p><strong>Megnevezés:</strong> ${productType}<br>
        <strong>Darabszám:</strong> ${quantity}</p>
        
        <h3>Design</h3>
        <p><strong>Jelvény méret:</strong> ${designBadgeSize}<br>
        ${(productType === 'Szalagos kitűző' || productType === 'Szalag kitűző nélkül') ?
        `<strong>Szalag szín:</strong> ${designRibbonColor}<br>
         <strong>Betűszín:</strong> ${designFontColor}<br>
         <strong>Szalagvég:</strong> ${designRibbonEnd}<br>` : ''
        }
        <strong>Leírás:</strong> ${description}</p>
        
        <h3>Átvétel és fizetés</h3>
        <p><strong>Módja:</strong> ${deliveryAndPayment}</p>
        
        <h3>Számlázási adatok</h3>
        <p><strong>Név:</strong> ${billingInfoName}<br>
        <strong>Cím:</strong> ${billingInfoAddress}<br>
        <strong>Email:</strong> ${billingInfoEmail}</p>
        
        <h3>Szállítási adatok</h3>
        <p><strong>Cím:</strong> ${shippingInfoAddress}<br>
        <strong>Irányítószám:</strong> ${shippingInfoZip}<br>
        <strong>Telefonszám:</strong> ${shippingInfoContactPhone}</p>
        
        <h3>Egyéb</h3>
        <p><strong>Kérés, megjegyzés:</strong> ${otherRequest}<br>
        <strong>Rendezvény időpontja:</strong> ${promDate}<br>
        <strong>Megrendelés dátuma:</strong> ${orderDate}</p>
        
        ${attachmentUrls.length > 0 ? `
        <h3>Csatolt fájlok:</h3>
        <ul>
          ${attachmentUrls.map(url => `<li><a href="${url}">${url}</a></li>`).join('')}
        </ul>
        ` : ''}
      </div>
    `;

    const msg: MailDataRequired = {
      to: "jelvenyrendeles@gmail.com",
      from: "info@jelvenydepo.hu",
      replyTo: contactEmail,
      subject: `Új ${orderType}`,
      html: messageBody,
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