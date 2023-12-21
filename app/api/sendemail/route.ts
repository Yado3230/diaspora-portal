import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    to,
    subject,
    body: emailBody,
    title,
    name,
    userId,
    phoneNumber,
    motherName,
    gender,
    initialDeposit,
    monthlyIncome,
    occupation,
    branch,
    accountType,
    city,
    state,
  } = body;

  const emailContent = fs.readFileSync(
    "./app/api/sendemail/email.html",
    "utf8"
  );
  const replacedContent = emailContent.replaceAll("{{title}}", title);
  const replacedBody = replacedContent.replaceAll("{{body}}", emailBody);
  const replacedName = replacedBody.replaceAll("{{name}}", name ? name : "");
  const linkReplace = replacedName.replaceAll(
    "{{account-id}}",
    userId ? userId : ""
  );
  const linkReplace2 = linkReplace.replaceAll(
    "{{phone-number}}",
    phoneNumber ? phoneNumber : ""
  );
  const linkReplace3 = linkReplace2.replaceAll(
    "{{mother-name}}",
    motherName ? motherName : ""
  );
  const linkReplace4 = linkReplace3.replaceAll(
    "{{gender}}",
    gender ? gender : ""
  );
  const linkReplace5 = linkReplace4.replaceAll(
    "{{initial-deposit}}",
    initialDeposit ? initialDeposit : ""
  );

  const linkReplace6 = linkReplace5.replaceAll(
    "{{monthly-income}}",
    monthlyIncome ? monthlyIncome : ""
  );
  const linkReplace7 = linkReplace6.replaceAll(
    "{{occupation}}",
    occupation ? occupation : ""
  );
  const linkReplace8 = linkReplace7.replaceAll(
    "{{branch}}",
    branch ? branch : ""
  );
  const linkReplace9 = linkReplace8.replaceAll(
    "{{account-type}}",
    accountType || ""
  );
  const linkReplace10 = linkReplace9.replaceAll("{{city}}", city ? city : "");
  const linkReplace11 = linkReplace10.replaceAll(
    "{{state}}",
    state ? state : ""
  );

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
    html: linkReplace11,
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
