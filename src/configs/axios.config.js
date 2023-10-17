import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
});
