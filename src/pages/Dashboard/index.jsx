import { NavLink, Outlet } from "react-router-dom";
import imgUser from "../../assets/image/imgUser.jpg";
import Moon from '../../assets/image/moon.svg'
import Sun from "../../assets/image/linght.svg"
import { useContext } from "react";
import {context} from '../../context/context'

function index() {
  const {mode, setMode} = useContext(context);
  return (
    <div className="container">
        <div className="wrapper h-[100vh] overflow-hidden bg-slate-100 border dark:border-none flex w-[100%] dark:bg-slate-400 items-start">
          <div className="aside w-[300px] h-[100vh] bg-[#F2EAE1] dark:bg-slate-500 dark:border rounded-l p-2">
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
              <li className="home p-2 rounded">
              <NavLink to="/dashboard/">Reports</NavLink>
              </li>
              <li className="about p-2 rounded mt-2">
              <NavLink to="books">Books</NavLink>
              </li>
              <li className="contact p-2 rounded mt-2">
              <NavLink to="author">Author</NavLink>              
              </li>
              <li className="contact p-2 rounded mt-2">
              <NavLink to="ganre">Ganre</NavLink>              
              </li>
              <li className="contact p-2 rounded mt-2">
              <NavLink to="language">Language</NavLink>              
              </li>
              <li className="contact p-2 rounded mt-2">
              <NavLink to="translate">Translate</NavLink>              
              </li>
              <li className="contact text-red-900 underline rounded mt-12">
              <NavLink to="/" className= "flex items-center tpx]" ><p>LogOut</p>
                                <span className="block mt-2 mx-2"><i className='bx bx-log-in-circle text-[20px]'></i></span>
              </NavLink>              
              </li>
            </ul>
          </div>
          <div className="main w-[98%] rounded"> 
          
            <div className="dashHeader dark:border rounded-r dark:bg-slate-500 h-[50px] bg-white px-2 w-[100%] flex justify-between items-center">
              <button className="w-10  p-2">
                <i className="bx bx-left-arrow"></i>
              </button>
              
              <div className="flex w-[450px] justify-between">
              <form className="w-[350px] relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-[100%] border p-1 pr-6 px-2 rounded dark:text-black"
                />
                <i className="bx bx-search absolute dark:text-black right-2 top-2"></i>
              </form>
              <button
              style={
                mode == "light"
                  ? { backgroundColor: "silver" }
                  : { backgroundColor: "#F1C93B" }
              }
              onClick={() => setMode(mode == "dark" ? "light" : "dark")}
              className="p-2 text-[22px] px-3 border rounded"
            >
              <img src={mode == "light" ? Moon : Sun} alt="darckLight" className="text-[20px]"/>
            </button>
              </div>
            </div>
            <Outlet/>            
          </div>
        </div>          
      </div>    
  )
}

export default index