import { customAxios } from "../configs/axios.config";

export const getAllProducts = async (setterFn) => {
    const { data } = await customAxios.get("/products");
    setterFn(data)
}