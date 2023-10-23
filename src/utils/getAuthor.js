import { customAxios } from "../configs/axios.config";

export const getAuthor = async () =>{
    const author = customAxios.get('/author/all', {
        headers: {
            language: localStorage.getItem('language') || 'uz'
        }      
    })
    return author
}