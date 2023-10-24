import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuthor } from "../../utils/getAuthor";
import { getGenreAll } from "../../utils/getAllJenre";
import "./main.css";
import { getSearchAll } from "../../utils/getSearch";
import { useState } from "react";

const Hero = () => {
  const [searchText, setSearchText] = useState(null);
  const queryClient = useQueryClient();
  const author = useQuery({
    queryKey: ["set_all_author"],
    queryFn: getAuthor,
  });
  const genre = useQuery({
    queryKey: ["get_Genre"],
    queryFn: getGenreAll,
  });
  useQuery({
    queryKey: ["get_all_book", searchText],
    queryFn: async () => {
      const data = await getSearchAll(searchText);
      await queryClient.setQueryData(["get_all_book"], data.data);
      return data;
    },
  });

  // async function getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = reject;
  //   });
  // }

  // onChange={async (e) => {
  //   await getBase64(e.target.files[0]) //
  //     .then((res) => console.log(res, "my file..."))
  //     .catch((err) => console.log(err));
  // }}

  return (
    <>
      <div className="hero  pt-20">
        <div className="container">
          <div className="hero-inner">
            <form
              action="#"
              className="flex dark:text-black items-center justify-center mt-12"
            >
              <label
                htmlFor="heroSearch"
                className="flex relative items-center justify-between w-[500px] border-2  rounded-md"
              >
                <i className="bx bx-search absolute left-2 top-2 text-xl"></i>
                <input
                  type="search"
                  id="heroSearch"
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="search..."
                  className=" pl-8 py-2 w-[100%] shadow dark:bg-white focus:outline-none"
                />
                <button className="btn bg-sky-400 px-3 py-2 rounded text-white">
                  Search
                </button>
              </label>
            </form>
            <div className="select flex items-center gap-4 mt-12 justify-center">
              <select
                name="#"
                id=""
                className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold"
              >
                <option hidden disabled >
                  Janr
                </option>
                {genre?.data?.data &&
                  genre.data.data.map((item) => {
                    return <option key={item.name}>{item.name}</option>;
                  })}
              </select>
              <select
                name="#"
                className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold"
              >
                <option hidden disabled >
                  Avtor
                </option>
                {author?.data?.data &&
                  author.data.data.map((auth) => {
                    return <option key={auth.name}>{auth.name}</option>;
                  })}
              </select>
              <select
                name="#"
                id=""
                className="px-4 dark:text-black rounded drop-shadow-xl focus:outline-none py-2 bg-stone-200 w-[200px] font-semibold"
              >
                <option hidden disabled >
                  Kitob holati
                </option>
                <option value="new">Yangi</option>
                <option value="normal">Oddiy</option>
                <option value="old">Eski</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
