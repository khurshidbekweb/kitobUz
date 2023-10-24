import { useQuery } from "@tanstack/react-query";
import AddAuthor from "../../components/AddAuthor";
import { getAuthor } from "../../utils/getAuthor";

function Author() {
  const authorRender = useQuery({
    queryKey: ['get_Author_render'],
    queryFn: getAuthor
  })  
  return (    
    <div className="relative overflow-x-auto shadow-md">      
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
        <h1 className="text-[22px] font-medium pl-5 p-3">Author</h1>
        <AddAuthor/>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              №
            </th>
            <th scope="col" className="px-6 py-3">
              Author name
            </th>            
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {authorRender?.data?.data && authorRender.data.data.map((item,index)=>{
            return <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {index+1}
            </th>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.name}
            </td>            
            <td className="pr-4 py-4 text-end">
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

export default Author;
