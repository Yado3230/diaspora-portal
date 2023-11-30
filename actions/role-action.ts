import { Role } from "@/types/types";

const API_URL = "http://10.1.177.121:8881/";

export const getAllRoles = async (): Promise<Role[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/roles`);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
