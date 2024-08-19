import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { status: "success", message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to send email" },
      { status: 500 }
    );
  }
}
