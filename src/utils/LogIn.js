import {axiosCustom} from "./axios.util.js" 

export const LogIn = async ({username,password})=>{
    const {data} = await axiosCustom.post("/auth/...",{
        username:username,
        password:password
    })
    return data
}