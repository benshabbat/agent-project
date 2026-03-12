const API_BASE_URL = "http://localhost:5000/api/";

export const getAgentRequest = async (id:string) => {
  try {
    const response = await fetch(`${API_BASE_URL}agent/${id}`);
    if (!response.ok) {
      throw new Error("Request getAgent failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during get Agent:", error);
    throw error;
  }
};

