import { customAxios } from "../configs/axios.config"

export const getAllBooks = async () => {
    const { data } = await customAxios.get('/book/all', {
        headers: {
            language: 'uz'
        }
    })
    return data
}