import connectDB from "@/lib/db";
import { ContactController } from "@/modules/contact/contact.controller";

export async function POST(req: Request) {
  await connectDB();
  return ContactController.sendEmail(req);
}
