import { UserRequest, UserResponse } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Login {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export const getAllUsers = async (): Promise<UserResponse[]> => {
  try {
    const res = await fetch(`${API_URL}api/v1/users`);
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const createUser = async (data: UserRequest): Promise<UserResponse> => {
  try {
    const response = await fetch(`${API_URL}api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

export const deleteUser = async (id: string): Promise<Boolean> => {
  try {
    const res = await fetch(`${API_URL}api/v1/users/${id}`, {
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

export const logUser = async (data: Login): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}login`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Please check your username and password.");
      } else {
        throw new Error(`Request failed with status: ${response.status}`);
      }
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error: Unable to connect to the server.");
    } else {
      console.error("Error:", error);
      throw error; // Rethrow the error to handle it in the caller
    }
  }
};
