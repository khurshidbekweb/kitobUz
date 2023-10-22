// IMages Import
import Loc from "../../assets/image/place.svg";
import Sun from "../../assets/image/linght.svg";
import Moon from "../../assets/image/moon.svg";
import { NavLink } from "react-router-dom";
import { context } from "../../context/context";
import { useContext } from "react";
import "./index.css";


import {getAllLanguage} from "../../utils/getAllLanguage";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Header() {
  const { mode, setMode } = useContext(context);
  // const [language, setLanguage] = useState(localStorage.getItem('lang') || 'uz')

  const res = useQuery({
    queryKey: ["get_Language"],
    queryFn: getAllLanguage
  })
  console.log(res.data.data);
//  { res.data.data && res.data.data.filter((item)=>{
//         setLanguage([...language, item.code])
// })}
//   console.log(language);
  return (
    <div className="header w-[100%] text-center dark:bg-slate-600 dark:text-yellow-50 bg-white items-center fixed z-30 top-0 ">
      <div className="container mx-auto">
        <div className="wrapper  flex justify-between items-center">
          <div className="logo">
            <a href="#">
              <h1 className="text-[35px] font-[800]">KitobUz</h1>
            </a>
          </div>
          <nav className="w-[750px] flex justify-between items-center">
            <a href="#" className="hover:text-green-800 dark:hover:text-white font-medium p-2 link">              
              <img src={Loc} alt="loc" className="inline mx-1" />
              Toshkent shahar
            </a>
            <form className="w-[400px] flex justify-between items-cente">
              <label className="font-bold text-[32xp]">
                {" "}
                Valyuta:
                <select className="border dark:text-black p-1 rounded shadow font-medium mx-1">
                  <option value="sum">SUM</option>
                  <option value="usd">USD</option>
                  <option value="rub">RUB</option>
                </select>
              </label>
              <label className="font-bold text-[32xp]">Language:
                <select className="border p-1 rounded shadow font-medium mx-1 dark:text-black">
                  <option value="uz">UZB</option>
                  <option value="eng">ENG</option>
                  <option value="rus">RUS</option>
                </select>
              </label>
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
              <img src={mode == "light" ? Moon : Sun} alt="darckLight" />
            </button>
          </nav>
          <div className="btn w-[230px] flex justify-between items-center">
            <button className="add bg-green-600 p-2 px-4 rounded text-white font-medium">
              Add
            </button>
            <NavLink
              to="/login"
              className="singIn bg-yellow-400 p-2 px-4 font-medium rounded"
            >
              Ro`yxatdan o`tish
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
