import axios from "axios";

const URL = import.meta.env.VITE_URL || "http://localhost:3000";

export const http = axios.create({
  baseURL: URL,
});
