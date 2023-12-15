import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";

export async function POST(req: Request) {
  const body = await req.json();
  const { to, subject, body: emailBody, title, name } = body;

  const emailContent = fs.readFileSync(
    "./app/api/sendemail/email.html",
    "utf8"
  );
  const replacedContent = emailContent.replaceAll("{{title}}", title);
  const replacedName = replacedContent.replaceAll("{{name}}", name);
  const replacedBody = replacedName.replaceAll("{{body}}", emailBody);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Cooperative Bank of Oromia<yaredmesele1@gmail.com>",
    to,
    subject,
    html: replacedBody,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      }
    });
    return NextResponse.json("sent");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
