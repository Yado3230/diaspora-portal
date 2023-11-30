import { Role } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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
