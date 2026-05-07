import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  port: process.env.PORT,
  server_url: process.env.SERVER_URL,
};

export default config;



// mh_dev
// p4YtJW0eGZhKSGhF