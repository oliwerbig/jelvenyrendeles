import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.EMAIL_API_KEY as string);

export async function POST(request: Request) {
  const { email, phone, message, name } = (await request.json()) as any;

  const msg = {
    to: "jelvenyrendeles@gmail.com",
    from: "info@jelvenydepo.hu",
    replyTo: email,
    templateId: "d-9980c208663844af8eb5044bf2d97e9e",
    dynamicTemplateData: {
      name: name,
      email: email,
      phone: phone,
      message: message,
    },
  } as MailDataRequired;

  try {
    await sgMail.send(msg);
    return NextResponse.json(
      { message: `Email has been sent` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    console.error(error?.response?.body);
    console.error(error?.response?.body?.errors);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
