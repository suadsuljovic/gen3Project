import axios from "axios";

export const blogApi = axios.create({
  baseURL: "http://localhost:1337",
});
