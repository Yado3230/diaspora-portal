import { Account } from "@/types/types";

const API_URL = "http://10.1.177.121:8881/";

export const getAllAccounts = async (): Promise<Account[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/accounts`);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const deleteAccount = async (id: string): Promise<Boolean> => {
  try {
    const res = await fetch(`${API_URL}api/v1/accounts/${id}`, {
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
