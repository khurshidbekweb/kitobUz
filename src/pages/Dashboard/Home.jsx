const Index = () => {
  return (
    <>
      <div className="userList flex justify-between items-center p-2 px-2 font-bold">
              <h2 className="text-[26px]">BookList</h2>
              <button className="border p-2 rounded text-white bg-green-400 px-3">
                Add new Book
              </button>
      </div>
            <hr />
      <ul className="booksList w-[100%]">
              <li className="item text-[18px] font-medium flex justify-between items-center w-[80%] p-2 px-5">
                <p>Book</p>
                <p>Author</p>
                <p>Date</p>
              </li>
              <li className="item flex dark:text-black justify-between items-center w-[97%] mx-auto bg-white rounded">
                <div className="info flex justify-between items-center w-[85%] text-center p-2 font-medium">
                  <p> O`tkan kunlar </p>
                  <p>Abdulla Qodriy</p>
                  <p>21-okt-2023</p>
                </div>
                <div className="w-[10%] flex justify-evenly items-center">
                  <button className="btn text-[22px]">
                    <i className="bx bx-pencil"></i>
                  </button>
                  <button className="btn text-[22px]">
                    <i className="bx bx-trash"></i>
                  </button>
                </div>
              </li>
      </ul> 
    </>
  );
};

export default Index;
