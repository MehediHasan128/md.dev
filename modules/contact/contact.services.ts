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

  let htmlContent = fs.readFileSync(userEmailTemplate, "utf-8");

  htmlContent = htmlContent
    .replace(/{{USER_NAME}}/g, userName)
    .replace(/{{USER_EMAIL}}/g, data?.userEmail)
    .replace(/{{SUBJECT}}/g, data?.subject)
    .replace(/{{MESSAGE}}/g, data?.message)
    .replace(/{{SUBMITTED_AT}}/g, new Date().toLocaleString());
  
  const result = await sendEmail(data?.userEmail, data?.subject, htmlContent);
  console.log(result);
};

export const ContactServices = {
  sendEmailFromUser,
};
