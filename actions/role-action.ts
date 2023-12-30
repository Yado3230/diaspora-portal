import { PermissionTemplate, Role } from "@/types/types";

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
export const getAllAuthorities = async (): Promise<PermissionTemplate[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/authorities`);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const createRole = async (values: {
  roleName: string;
  authorities: PermissionTemplate[];
}): Promise<Role> => {
  try {
    const res = await fetch(`${API_URL}api/v1/roles`, {
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

export const deleteRole = async (id: number): Promise<[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/roles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const editRole = async (
  values: PermissionTemplate[],
  id: number
): Promise<Role> => {
  try {
    const res = await fetch(`${API_URL}api/v1/roles/${id}/set-authorities`, {
      method: "PUT",
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
