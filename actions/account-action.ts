import { Account, ReportTypeByMonth } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllAccounts = async (values: string): Promise<Account[]> => {
  try {
    let url = `${API_URL}api/v1/accounts?sortBy=percentage_completed&sortDirection=desc`;

    if (values === "include") {
      url += "&status=INITIAL";
    } else if (values === "exclude") {
      url += "&statusToExclude=INITIAL";
    }
    // Add more parameters as needed
    const res = await fetch(url);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getDashboardReports = async (
  year: string | number
): Promise<[]> => {
  try {
    let url = `${API_URL}api/v1/accounts/dashboard-report`;

    if (year) {
      url += `?year=${year.toString()}`;
    }

    const res = await fetch(url);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const getReportMonthlyByYear = async (
  year: string | number
): Promise<ReportTypeByMonth[]> => {
  try {
    let url = `${API_URL}api/v1/accounts/monthly-dashboard-report`;

    if (year) {
      url += `?year=${year.toString()}`;
    }

    const res = await fetch(url);
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
