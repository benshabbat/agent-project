export interface LoginForm {
  agentCode: string;
  password: string;
}
const API_BASE_URL = "http://localhost:5000/api/";

export const loginRequest = async (formData: LoginForm) => {
  try {
    const response = await fetch(`${API_BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};


