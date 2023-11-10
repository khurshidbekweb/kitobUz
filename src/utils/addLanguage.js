import { localizationsAxios } from "../configs/axios.config";

export const addLanguage = async ({ code, title }) => {
  const { data } = await localizationsAxios.post("/language/add", {
    code,
    title,
  });
  return data;
};
