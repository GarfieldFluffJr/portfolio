import { http } from "./http";

export const testBackend = async (data: any) => {
  try {
    const response = await http.post("/data", { data });
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.error("Failure");
    }
  } catch (err) {
    throw err;
  }
};
