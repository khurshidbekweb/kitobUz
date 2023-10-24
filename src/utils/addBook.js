import { customAxios } from "../configs/axios.config";

export const addBook = async ({
  title,
  description,
  language,
  price,
  year,
  status,
  image,
  author,
  genre,
}) => {
  const { data } = await customAxios.post("/book/add", {
    title: title,
    description: description,
    language: language,
    price: price,
    year: year,
    status: status,
    image: image,
    authorId: author,
    genreId: genre,
  });
  return data;
};
