import { Loan, LoanById } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllLoans = async (): Promise<Loan[]> => {
  try {
    let url = `${API_URL}api/v1/loans?sortBy=loanAmount&sortDirection=desc`;
    // Add more parameters as needed
    const res = await fetch(url);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getLoanById = async (id: string): Promise<LoanById> => {
  try {
    const res = await fetch(`${API_URL}api/v1/loans/${id}`);
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteLoan = async (id: string): Promise<Boolean> => {
  try {
    const res = await fetch(`${API_URL}api/v1/loans/${id}`, {
      method: "DELETE",
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

export const changeAccountStatus = async (
  id: string,
  status: String
): Promise<Boolean> => {
  try {
    const res = await fetch(
      `${API_URL}api/v1/accounts/${id}/update-status?status=${status}`,
      {
        method: "PUT",
      }
    );
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
