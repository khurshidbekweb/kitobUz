import { useState } from "react";
import { addBook } from "../../utils/addBook";
import toastify from "../../utils/toastify";

const AddBookModal = () => {
  const [image, setImage] = useState(null);
  async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.bookTitle.value;
    const description = e.target.bookDescription.value;
    const language = e.target.bookLang.value;
    const price = e.target.bookPrice.value;
    const year = e.target.bookYear.value;
    const status = e.target.bookStatus.value;
    const author = e.target.bookAuthor.value;
    const genre = e.target.bookGenre.value;
    try {
      await addBook({
        title,
        description,
        language,
        price,
        year,
        status,
        image,
        author,
        genre,
      });
    } catch (err) {
      toastify.infoMessage("error");
    }
  };

  return (
    <>
      <button
        onClick={() => {
          document
            .querySelector("#add-book-modal")
            .classList.replace("hidden", "visible");
        }}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add new Book
      </button>

      <div
        id="add-book-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto mx-auto h-[100%] max-h-full bg-slate-800 bg-opacity-40"
      >
        <div className="modal relative w-full max-w-4xl max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => {
                document
                  .querySelector("#add-book-modal")
                  .classList.replace("visible", "hidden");
              }}
              type="button"
              className="absolute top-0 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <form
                onSubmit={handleSubmit}
                className=" grid grid-cols-2 gap-4"
                action="#"
              >
                <div>
                  <label
                    htmlFor="bookTitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book title
                    <select
                      name="bookTitle"
                      id="bookTitle"
                      required
                      className="block mt-1 w-full mb-2 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <option disabled value="1">
                        title
                      </option>
                      <option value="1">title</option>
                      <option value="1">title</option>
                      <option value="1">title</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="bookDescription"
                    className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book description
                    <select
                      name="bookDescription"
                      id="bookDescription"
                      required
                      className="block mt-1 w-full mb-2 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <option disabled value="1">
                        description
                      </option>
                      <option value="1">description</option>
                      <option value="1">description</option>
                      <option value="1">description</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="bookLang"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Book language
                  </label>
                  <select
                    name="bookLang"
                    id="bookLang"
                    required
                    className="block mt-1 w-full mb-2 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <option disabled value="1">
                      language
                    </option>
                    <option value="1">language</option>
                    <option value="1">language</option>
                    <option value="1">description</option>
                  </select>
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
                    onChange={async (e) => {
                      await getBase64(e.target.files[0]) //
                        .then((res) => setImage(res))
                        .catch((err) => console.log(err));
                    }}
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
                      <option value="1" disabled>
                        Author name
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        O`tkir Hoshimov
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Avaz O`tar
                      </option>
                      <option value="2" id="axscadvfvjkvank">
                        Hudoyberdi To`xtaboyev
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
                      <option value="1" disabled>
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

export default AddBookModal;
