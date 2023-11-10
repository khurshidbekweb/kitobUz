import AddLangModal from "../../components/Modals/AddLangModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllLanguage } from "../../utils/getAllLanguage";
import { deletLanguage } from "../../utils/deletLanguage";
import toastify from "../../utils/toastify";

function Language() {
  const deleteLangMutation = useQueryClient();
  
  const languageAll = useQuery({
    queryKey: ["language_all_item"],
    queryFn: getAllLanguage,
  });

  const deletLang = useMutation({
    mutationFn: deletLanguage,
    onSuccess: ()=>{
        deleteLangMutation.invalidateQueries({queryKey: ['language_all_item']})
        toastify.successMessage('Language deleted successfully!');
    }    
  })

  return (
    <div>
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
        <h1 className="text-[22px] font-medium pl-5 p-3">Language</h1>
        <AddLangModal />
      </div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Code
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {languageAll?.data &&
              languageAll.data.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.code}
                    </th>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4 text-end">
                      <button className="btn text-[22px]  mr-4">
                        <i className="bx bx-pencil"></i>
                      </button>
                      <button onClick={async () => await deletLang.mutateAsync(item.id)} className="btn text-[22px]">
                        <i className="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Language;
