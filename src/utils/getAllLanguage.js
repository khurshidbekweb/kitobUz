import { localizationsAxios } from "../configs/axios.config"

export const getAllLanguage = async () =>{
    const language = await localizationsAxios.get('/language/all')
    return language;
}