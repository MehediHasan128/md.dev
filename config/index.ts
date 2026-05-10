import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  server_url: process.env.SERVER_URL,
  admin_email: process.env.ADMIN_EMAIL,
  smtp_secret_credential: process.env.SMTP_SECRET_CREDENTIAL,
};

export default config;