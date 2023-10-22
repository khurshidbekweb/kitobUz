

const Index = () => {
  return (
    <>
      <h2 className="text-[26px]  font-medium pl-5 p-3">Reports</h2>
      
      <ul className="booksList w-[100%] flex justify-between items-center px-3">
              <li className="item text-[18px] font-medium border rounded bg-[#cbe6f8] text-black w-[200px] p-2">
                <div className="book p-1">
                  <i className='bx bx-book-bookmark text-[60px] text-green-600'></i>
                  <h1 className="text-[17px] mx-2 font-bold dark:text-white">Books</h1>
                </div>
                  <span className="block text-end text-[22px] font-bold mt-3">1521</span>
              </li>
              <li className="item text-[18px] font-medium border rounded bg-[#F8D442] w-[200px] p-2">
                <div className="book p-1">
                <i className='bx bx-user text-[60px]'></i>
                  <h1 className="text-[15px] mx-2 text-black dark:text-white">Author</h1>
                </div>
                  <span className="block text-end text-[22px] font-bold mt-3 dark:text-black">120</span>
              </li>
              <li className="item text-[18px] font-medium border rounded bg-[#e5cbdb] w-[200px] p-2">
                <div className="book p-1">
                <i className='bx bxl-magento text-[60px] text-[#8CC0DE]'></i>
                  <h1 className="text-[15px] mx-2">Genre</h1>
                </div>
                  <span className="block text-end text-[22px] font-bold dark:text-black mt-3">14</span>
              </li>
              <li className="item text-[18px] font-medium border rounded bg-[#79AC78] w-[200px] p-2">
                <div className="book p-1">
                <i className='bx bx-planet text-[60px]'></i>
                  <h1 className="text-[15px] mx-2 ">Language</h1>
                </div>
                  <span className="block text-end text-[22px] font-bold dark:text-black mt-3">3</span>
              </li>
      </ul> 
    </>
  );
};

export default Index;
