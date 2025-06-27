import axios from "axios";

const api = axios.create({
  baseURL: "", // TODO: Quang Linh
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use((config) => {
  // TODO: Quang Linh
  // const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  // return config;
  return config;
});

export { api };