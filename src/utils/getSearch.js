import { customAxios } from "../configs/axios.config"

export const getSearchAll = async (text) =>{
    const search = await customAxios.get(`/book?search=${text}`, {
        headers: {
            language: localStorage.getItem('language') || 'uz'            
        }
    })
    return search
}