import { http } from "./http";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await http.post("/contact/send", { data });
    if (response.status === 200) {
      console.log("From api wrapper, email send successfully! Response:", response.data);
    } else {
      console.error("Failure");
      console.log("Response from backend:", response.data);
    }
  } catch (err) {
    throw err;
  }
};
