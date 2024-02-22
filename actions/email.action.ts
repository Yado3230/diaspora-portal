import { EmailRequest, EmailResponse, SendEmail } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllEmails = async (): Promise<EmailResponse[]> => {
  try {
    let url = `${API_URL}api/v1/email-templates`;
    // Add more parameters as needed
    const res = await fetch(url);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const createEmail = async (
  values: EmailRequest
): Promise<EmailRequest> => {
  try {
    const res = await fetch(`${API_URL}api/v1/email-templates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const editEmail = async (
  id: number,
  values: EmailRequest
): Promise<EmailResponse> => {
  try {
    const res = await fetch(`${API_URL}api/v1/email-templates/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteEmail = async (id: number): Promise<Boolean> => {
  try {
    const res = await fetch(`${API_URL}api/v1/email-templates/delete/${id}`, {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }
    const responseData = res.ok;
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const sendEmail = async (values: SendEmail): Promise<EmailRequest> => {
  try {
    const res = await fetch(`${API_URL}api/v1/services/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
