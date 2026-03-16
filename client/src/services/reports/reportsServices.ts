const API_BASE_URL = "http://localhost:5000/api/report/";

// export const getReportRequest = async (id:string) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}report/${id}`);
//     if (!response.ok) {
//       throw new Error("Request getReport failed");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error during get Report:", error);
//     throw error;
//   }
// };

export const getItemId = async (url:string ,id: string, type: string) => {
  try {
    const response = await fetch(`${url}${id}`);
    if (!response.ok) {
      throw new Error(`Request get ${type} failed`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error during get ${type}:`, error);
    throw error;
  }
};
export const getReportRequest = getItemId("reportId", "report");
