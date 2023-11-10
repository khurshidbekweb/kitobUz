import { localizationsAxios } from "../configs/axios.config"

export const deletTrenslate = async (id) =>{
    const {data} = await localizationsAxios.delete(`/translate/delete/${id}`)
    return data;
}