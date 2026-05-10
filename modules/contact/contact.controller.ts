import { catchAsync } from "@/utils/catchAsync";
import { sendResponce } from "@/utils/sendResponce";
import { ContactServices } from "./contact.services";

const sendEmail = catchAsync(async (req: Request) => {
    const body = await req.json();

    const data = await ContactServices.sendEmailFromUser(body);
    
    return sendResponce({
        statusCode: 200,
        success: true, 
        message: 'Thank you for contacting me 🚀 Your message has been received successfully.',
        data: data
    })
});

export const ContactController = { sendEmail };