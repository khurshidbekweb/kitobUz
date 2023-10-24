import { localizationsAxios } from "../configs/axios.config";

export const addLanguage = async ({ code, title }) => {
    console.log(code, title );
    const { data } = await localizationsAxios("/language/add", {
        method: "POST",
        data: {
            code: code,
            title: title,
        },
    });

  return data;
};
