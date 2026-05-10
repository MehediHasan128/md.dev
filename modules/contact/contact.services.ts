interface IEmail {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmailFromUser = (data: IEmail) => {
  console.log(data);
};

export const ContactServices = {
  sendEmailFromUser,
};
