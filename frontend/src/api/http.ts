import axios from "axios";

const URL = process.env.URL || "http://localhost:3000";

export const http = axios.create({
  baseURL: URL,
});
