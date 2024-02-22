import { OfflineAccount, ReportTypeByMonth } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllOfflineAccounts = async (
  values: string
): Promise<OfflineAccount[]> => {
  try {
    let url = `${API_URL}api/v1/offline-accounts?size=1000&sortDirection=desc`;

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

export const getOfflineAccountsDashboardReports = async (
  year: string | number
): Promise<[]> => {
  try {
    let url = `${API_URL}api/v1/offline-accounts/dashboard-report`;

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

export const getOfflineAccountsReportMonthlyByYear = async (
  year: string | number
): Promise<ReportTypeByMonth[]> => {
  try {
    let url = `${API_URL}api/v1/offline-accounts/monthly-dashboard-report`;
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

export const getOfflineAccountById = async (
  id: string
): Promise<OfflineAccount> => {
  try {
    const res = await fetch(`${API_URL}api/v1/offline-accounts/${id}`);
    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const deleteOfflineAccount = async (id: string): Promise<Boolean> => {
  try {
    const res = await fetch(`${API_URL}api/v1/offline-accounts/delete/${id}`, {
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

export const changeOfflineAccountStatus = async (
  id: string,
  status: String
): Promise<Boolean> => {
  try {
    const res = await fetch(
      `${API_URL}api/v1/offline-accounts/update/${id}/update-status?status=${status}`,
      {
        method: "POST",
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
