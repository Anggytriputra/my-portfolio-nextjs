import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { getMaxListeners } from "nodemailer/lib/xoauth2";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("test", email, subject, message);
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      // host: "smth",
      // port: 465,
      secure: true,
      auth: {
        user: "banguninbang@gmail.com",
        pass: "xthgxbqsopajglfs",
      },
    });

    const emailToOwner = {
      from: process.env.EMAIL,
      to: "anggytriasaputra@gmail.com",
      subject: "Email dari web Anggy",
      html: `
      <h3>Hello Anggy Triputra</h3>
      <li>title: ${subject}</li>
      <li>from email: ${email}</li>
      <li>message: ${message}</li>
      `,
    };
    const emailToUser = {
      from: process.env.EMAIL,
      to: `${email}`,
      subject: "Anggy Triputra Message",
      html: `
      <h3>Hello, ${email}</h3>
      <p>Thank you for interested in Anggy Triputra Web Portfolio</p>
      `,
    };

    await transporter.sendMail(emailToOwner);
    await transporter.sendMail(emailToUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
