import { Account } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllAccounts = async (values: string): Promise<Account[]> => {
  try {
    const url = new URL(`${API_URL}api/v1/accounts`);

    // Add parameters to the URL
    url.searchParams.append("sortBy", "percentage_completed");
    url.searchParams.append("sortDirection", "desc");

    if (values === "include") {
      url.searchParams.append("status", "INITIAL");
    } else if (values === "exclude") {
      url.searchParams.append("statusToExclude", "INITIAL");
    }
    // Add more parameters as needed

    const res = await fetch(url.toString());
    const responseData = await res.json();
    return responseData;
    // const res = await fetch(`${API_URL}api/v1/accounts`);
    // const responseData = await res.json();
    // return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getDashboardReports = async (
  year: string | number
): Promise<[]> => {
  try {
    const url = new URL(`${API_URL}api/v1/accounts/dashboard-report`);

    if (year) {
      url.searchParams.append("year", year.toString());
    }

    const res = await fetch(url.toString());
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getAccountById = async (id: string): Promise<Account> => {
  try {
    const res = await fetch(`${API_URL}api/v1/accounts/${id}`);
    return res.json();
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
