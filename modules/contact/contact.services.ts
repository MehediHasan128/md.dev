import path from "path";
import fs from "fs";
import { sendEmail } from "@/utils/sendEmail";

interface IEmail {
  firstName: string;
  lastName: string;
  userEmail: string;
  subject: string;
  message: string;
}

const sendEmailFromUser = async (data: IEmail) => {
  const userName = `${data?.firstName} ${data?.lastName}`;

  const userEmailTemplate = path.join(
    process.cwd(),
    "components/templates/userMail.html",
  );
  const adminEmailTemplate = path.join(
    process.cwd(),
    "components/templates/adminMail.html",
  );

  let userHTMLContent = fs.readFileSync(userEmailTemplate, "utf-8");
  let adminHTMLContent = fs.readFileSync(adminEmailTemplate, "utf-8");

  userHTMLContent = userHTMLContent
    .replace(/{{USER_NAME}}/g, userName)
    .replace(/{{USER_EMAIL}}/g, data?.userEmail)
    .replace(/{{SUBJECT}}/g, data?.subject)
    .replace(/{{MESSAGE}}/g, data?.message)
    .replace(/{{SUBMITTED_AT}}/g, new Date().toLocaleString());

  adminHTMLContent = adminHTMLContent.replace(/{{USER_NAME}}/g, userName);

  await sendEmail(
    userName,
    data?.userEmail,
    userHTMLContent,
    adminHTMLContent,
  );
};

export const ContactServices = {
  sendEmailFromUser,
};
