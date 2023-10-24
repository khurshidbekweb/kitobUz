import { localizationsAxios } from "../configs/axios.config";

export const addTranslate = async ({code, type, definition}) => {
  const { data } = await localizationsAxios(`/translate/add`, {
    method: "POST",
    data: {
      code: code,
      type: type,
      definition,
    },
  });
  return data;
};
