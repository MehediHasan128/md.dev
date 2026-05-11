import config from "@/config";
import nodemailer from "nodemailer";

export const sendEmail = async (
  userName: string,
  userEmail: string,
  userHTMLPage: string,
  adminHTMLPage: string,
) => {
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
    from: `"${userName}" <${config.admin_email}>`,
    to: config.admin_email,
    replyTo: userEmail,
    subject: `New Contact Request From ${userName}`,
    html: userHTMLPage,
  });

  await transporter.sendMail({
    from: `"MH.dev" <${config.admin_email}>`,
    to: userEmail,
    subject: "Thank You For Reaching Out",
    html: adminHTMLPage,
  });
};
