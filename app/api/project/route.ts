import connectDB from "@/lib/db";
import { ProjectController } from "@/modules/project/project.controller";

export async function POST(req: Request) {
  await connectDB();
  return ProjectController.addProjectToDB(req);
}
