import { NavLink, Outlet } from "react-router-dom";
import imgUser from "../../assets/image/imgUser.jpg";


function index() {
  return (
    <div className="container">
        <div className="wrapper h-[100vh] bg-slate-100 border dark:border-none flex w-[100%] dark:bg-slate-400 items-start">
          <div className="aside w-[300px] h-[100vh] bg-[#F2EAE1] dark:bg-slate-500 dark:border rounded-[5px] p-2">
            <div className="user w-[80px] flex dark:text-white text-black items-center mx-auto text-center">
              <span className="block w-[3px] text-center rounded mx-2 h-[20px] bg-yellow-300"></span>
              <h1 className="text-[24px] text-center font-black">Books</h1>
            </div>
            <div className="userImg mt-5">
              <img
                className="overflow-hidden w-[100%] rounded-[10px]"
                src={imgUser}
                alt="userImg"
              />
            </div>
            <ul className="w-[100%] p-2 list text-center mx-auto">
              <li className="home p-2 border rounded">
              <NavLink to="/dashboard/">Home</NavLink>
              </li>
              <li className="about p-2 border rounded mt-2">
              <NavLink to="books">Books</NavLink>
              </li>
              <li className="contact p-2 border rounded mt-2">
              <NavLink to="download">Author</NavLink>              
              </li>
              <li className="contact p-2 border rounded mt-2">
              <NavLink to="download">Ganre</NavLink>              
              </li>
              <li className="contact p-2 border rounded mt-2">
              <NavLink to="download">Language</NavLink>              
              </li>
              <li className="contact p-2 border rounded mt-2">
              <NavLink to="download">Translate</NavLink>              
              </li>
            </ul>
          </div>
          <div className="main w-[98%] rounded border dark:border"> 
          
            <div className="dasgHeader dark:bg-slate-500 h-[50px] bg-white px-2 w-[100%] flex justify-between items-center">
              <button className="w-10  p-2">
                <i className="bx bx-left-arrow"></i>
              </button>
              <form className="w-[350px] relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-[100%] border p-1 pr-6 px-2 rounded dark:text-black"
                />
                <i className="bx bx-search absolute dark:text-black right-2 top-2"></i>
              </form>
            </div>
            <Outlet/>            
          </div>
        </div>          
      </div>    
  )
}

export default index