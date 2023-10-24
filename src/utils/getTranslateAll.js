import { localizationsAxios } from "../configs/axios.config"

export const getTranslate = async ()=>{
    const trans = await localizationsAxios('/translate/all')
    return trans;
}