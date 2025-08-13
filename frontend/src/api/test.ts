import { http } from "./http";

export const testReturnData = async (data: any) => {
  try {
    const response = await http.post("/test/return-data", { data });
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.error("Failure");
    }
  } catch (err) {
    throw err;
  }
};

export const testGetData = async () => {
  try {
    const response = await http.get("/test/get-data");
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.error("Failure");
    }
  } catch (err) {
    throw err;
  }
};
