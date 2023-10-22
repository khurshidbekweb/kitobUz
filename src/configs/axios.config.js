import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://192.168.10.23:3000",
  timeout: 5000,
});

export const localizationsAxios = axios.create({
  baseURL: "http://192.168.10.23:3002",
  timeout: 2000
})