import AddTranslateModal from "../../components/Modals/AddTranslateModal";
import { useQuery } from "@tanstack/react-query";
import { getTranslate } from "../../utils/getTranslateAll";

function Translate() {
  const translateBook = useQuery({

    queryKey: ['translate_all_item'],
    queryFn: getTranslate
  })
  console.log(translateBook.data.data);
  return (
    <div>
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
        <h1 className="text-[22px] font-medium pl-5 p-3">Translate</h1>
        <AddTranslateModal />
      </div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Uzb
              </th>
              <th scope="col" className="px-6 py-3">
                Rus
              </th>
              <th scope="col" className="px-6 py-3">
                Eng
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {translateBook?.data?.data && translateBook.data.data.map((item)=>{
              return <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">{item.definition[0].value}</td>
              <td className="px-6 py-4">{item.definition[1].value}</td>
              <td className="px-6 py-4">{item.definition[2].value}</td>
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
    </div>
  );
}

export default Translate;
