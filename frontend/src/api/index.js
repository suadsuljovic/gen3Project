import axios from "axios";
const blogApi = axios.create({
  baseURL: "http://localhost:1337/",
});
