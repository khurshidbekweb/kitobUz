import { customAxios } from "../configs/axios.config";

export const createProduct = async (paylaod) => {
  const { data } = await customAxios.post("/products", {
    data: paylaod,
  });
  return data;
};
