import { useQuery } from "@tanstack/react-query";
import { getAllLanguage } from "../../utils/getAllLanguage";

const AddTranslate = () => {
  const languages = useQuery({
    queryKey: ["get_all_language"],
    queryFn: getAllLanguage,
  });

  console.log(languages.data);

  return (
    <>
      <button
        data-modal-target="add-translate-modal"
        data-modal-toggle="add-translate-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Translate
      </button>

      <div
        id="add-translate-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto mx-auto h-[100%] max-h-full bg-slate-800 bg-opacity-40"
      >
        <div className="modal relative w-full max-w-lg max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-0 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="add-translate-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Add Translate
              </h3>
              <form className=" flex flex-col gap-2" action="#">
                <div>
                  <label
                    htmlFor="bookTranslateCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book translate code (ex: utkir_khoshimov_translate_create)
                  </label>
                  <input
                    type="text"
                    name="bookTranslateCode"
                    id="bookTranslateCode"
                    placeholder="Book translate code..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookTranslateType"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book translate type (ex: content)
                  </label>
                  <input
                    type="text"
                    name="bookTranslateType"
                    id="bookTranslateType"
                    placeholder="Book translate type..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="translateDefinition"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book translate definition (uz: Salom || en: Hello)
                  </label>
                  {languages?.data?.length &&
                    languages.data.map((e) => {
                      return (
                        <input
                          key={e.id}
                          type="text"
                          name="translateDefinitionUz"
                          id="translateDefinition"
                          placeholder={`${e.code}`}
                          className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      );
                    })}
                </div>
                <button
                  type="submit"
                  className="w-full max-h-[100%] mt-6 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-3 px-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Translate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTranslate;
