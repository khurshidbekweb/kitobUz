import AddLang from "../../components/AddLang";

function Language() {
  return (
    <div>
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
        <h1 className="text-[22px] font-medium pl-5 p-3">Language</h1>
        <AddLang />
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                en
              </th>
              <td className="px-6 py-4">English</td>
              <td className="px-6 py-4 text-end">
                <button className="btn text-[22px]  mr-4">
                  <i className="bx bx-pencil"></i>
                </button>
                <button className="btn text-[22px]">
                  <i className="bx bx-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Language;
