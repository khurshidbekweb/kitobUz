import AddGenreModal from "../../components/Modals/AddGenreModal";
import { useQuery } from "@tanstack/react-query";
import { getGenreAll } from "../../utils/getAllJenre";


function Genre() {
  const genreRender = useQuery({
    queryKey: ['genre_UI'],
    queryFn: getGenreAll,
  })
  return (
    <div className="relative overflow-x-auto shadow-md">
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
        <h1 className="text-[22px] font-medium pl-5 p-3">Genre</h1>
        <AddGenreModal/>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Genre name</th>            
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {genreRender?.data?.data && genreRender.data.data.map((item)=>{
            return <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">            
            <th className="px-6 py-4">{item.name}</th>
            <td className="px-6 py-4 text-end">
              <button className="btn text-[22px]  mr-4">
                <i className="bx bx-pencil"></i>
              </button>
              <button className="btn text-[22px]">
                <i className="bx bx-trash"></i>
              </button>
            </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Genre;
