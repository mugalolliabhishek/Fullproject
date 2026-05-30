import axios from "axios";

const api = axios.create({
  baseURL: "https://fullproject-4-1wdy.onrender.com",
  withCredentials: true,
});

export default api;
