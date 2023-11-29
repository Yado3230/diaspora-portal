import { Account } from "@/types/types";

const API_URL = "http://10.1.177.121:8881/";

export const getAllAccounts = async (): Promise<Account[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/accounts`);
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};
