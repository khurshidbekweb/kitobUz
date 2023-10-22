const AddBook = () => {
  return (
    <>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add new Book
      </button>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto mx-auto h-[100%] max-h-full bg-slate-800 bg-opacity-40"
      >
        <div className="modal relative w-full max-w-4xl max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-0 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
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
                Add new Book
              </h3>
              <form className=" grid grid-cols-2 gap-4" action="#">
                <div>
                  <label
                    htmlFor="bookTitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book title
                  </label>
                  <input
                    type="text"
                    name="bookTitle"
                    id="bookTitle"
                    placeholder="Book title..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookDescription"
                    className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book description
                  </label>
                  <input
                    type="text"
                    name="bookDescription"
                    id="bookDescription"
                    placeholder="Book description..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookLang"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book language
                  </label>
                  <input
                    type="text"
                    name="bookLang"
                    id="bookLang"
                    placeholder="Book language..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookPrice"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book price
                  </label>
                  <input
                    type="number"
                    name="bookPrice"
                    id="bookPrice"
                    placeholder="Book price..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookYear"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book year
                  </label>
                  <input
                    type="number"
                    name="bookYear"
                    id="bookYear"
                    placeholder="Book year..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookStatus"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book status
                  </label>
                  <input
                    type="text"
                    name="bookStatus"
                    id="bookStatus"
                    placeholder="Book status..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookImage"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book image
                  </label>
                  <input
                    type="file"
                    name="bookImage"
                    id="bookImage"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="bookAuthor">
                    Choose author
                    <select
                      required
                      name="bookAuthor"
                      id="bookAuthor"
                      className="block mt-1 w-full mb-2 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <option value="1" disabled selected>
                        Author name
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        O`tkir Hoshimov
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        O`tkir Hoshimov
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        O`tkir Hoshimov
                      </option>
                    </select>
                  </label>
                </div>
                <div>
                  <label htmlFor="bookGenre">
                    Choose book genre
                    <select
                      required
                      name="bookGenre"
                      id="bookGenre"
                      className="block mt-1 w-full mb-2 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <option value="1" disabled selected>
                        Book genre
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Badiiy
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Diniy
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Drammatik
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Epik
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Lirik
                      </option>
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full max-h-[60%] mt-6 mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-0 px-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
