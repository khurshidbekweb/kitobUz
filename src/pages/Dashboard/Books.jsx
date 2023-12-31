import AddBookModal from "../../components/Modals/AddBookModal";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../utils/getAllProducts";
import { IMG_BASE_URL } from "../../constants/img.constant";

function Book() {
  const allBooks = useQuery({
    queryKey: ["get_all_book"],
    queryFn: getAllBooks,
  });
  console.log(allBooks.data);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md">
        <div className="userList flex justify-between items-center p-2 px-2 font-bold">
          <h2
            className="text-[26px]"
            title="Yangi kitob qo'shishdan oldin muallif nomini va kitob janrini kiritishingiz kerak"
          >
            Books
          </h2>
          <AddBookModal />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Language
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {allBooks?.data?.length &&
              allBooks.data.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title}
                    </td>
                    <td className="px-6 py-4">{item.author.value}</td>
                    <td className="px-6 py-4 overflow-hidden">
                      <img
                        className="w-8 h-8 rounded"
                        src={IMG_BASE_URL + item.image}
                        alt="imgBook"
                      />
                    </td>
                    <td className="px-6 py-4">{item.genre.value}</td>
                    <td className="px-6 py-4">{item.language}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">
                      <button className="btn text-[22px]  mr-4">
                        <i className="bx bx-pencil"></i>
                      </button>
                      <button className="btn text-[22px]">
                        <i className="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Book;
