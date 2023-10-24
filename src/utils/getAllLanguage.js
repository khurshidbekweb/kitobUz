import { localizationsAxios } from "../configs/axios.config"

export const getAllLanguage = async () =>{
    const {data} = await localizationsAxios.get('/language/all')
    return data;
}