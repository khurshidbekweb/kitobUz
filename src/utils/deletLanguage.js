import { localizationsAxios } from "../configs/axios.config"

export const deletLanguage = async (id) => {
    const {data} = await localizationsAxios.delete(`/language/delete/${id}`)
    
    return data;
}