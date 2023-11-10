import axios from "axios";
import { SERVER_BASE_URL } from "../constants/server.constant";
import { LOCALIZATION_BASE_URL } from "../constants/localization.constant";

export const customAxios = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 5000,
});

export const localizationsAxios = axios.create({
  baseURL: LOCALIZATION_BASE_URL,
  timeout: 5000
})