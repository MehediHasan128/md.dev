import { catchAsync } from "@/utils/catchAsync";
import { ProjectServices } from "./project.services";
import { sendResponce } from "@/utils/sendResponce";

const addProjectToDB = catchAsync(async (req: Request) => {
    const body = await req.json();

    const data = await ProjectServices.addProjectDataIntoDB(body);
    
    return sendResponce({
        statusCode: 200,
        success: true, 
        message: '',
        data: data
    })
});

export const ProjectController = { addProjectToDB };
