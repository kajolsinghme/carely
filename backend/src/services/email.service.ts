import { mailTransporter } from "../config/mail.js";

interface SendMailInput {
  to: string;
  subject: string;
  html: string;
}


export const sendMail = async ({ to, subject, html }: SendMailInput) => {
    await mailTransporter.sendMail({
        from: process.env['MAIL_FROM'],
        to,
        subject,
        html
    })
}
