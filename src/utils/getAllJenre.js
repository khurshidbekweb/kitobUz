
import { customAxios } from "../configs/axios.config"

export const getGenreAll = async () =>{
    const data = await customAxios.get('/genre/all', {
        headers: {
            language: localStorage.getItem('language')
        }
    })
    return data
}