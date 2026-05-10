import config from "@/config";
import nodemailer from "nodemailer";

export const sendEmail = async(userEmail: string, sub: string, htmlPage: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.admin_email,
      pass: config.smtp_secret_credential,
    },
  });

  await transporter.sendMail({
    from: config.admin_email,
    to: userEmail,
    subject: sub,
    html: htmlPage,
  });
};
