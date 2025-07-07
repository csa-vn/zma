import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // TODO: Quang Linh
  headers: {
    "Content-Type": "application/json"
  }
});

const getProducts = async () => {
  const res = await api.get('/posts');
  return res;
};

api.interceptors.request.use((config) => {
  // TODO: Quang Linh
  // const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  // return config;
  return config;
});

export { api, getProducts };