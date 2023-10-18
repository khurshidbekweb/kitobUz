// import { useState } from "react";
// import { customAxios } from "../configs/axios.config";
import { useState } from "react";
import Loc from "../../assets/image/place.svg";
import Sun from '../../assets/image/linght.svg'
import Moon from "../../assets/image/moon.svg"
import "./Header.css";
// import { useEffect } from "react";
// import { getAllProducts } from "../utils/getAllProducts";
function Header() {
  const [dark, setDarck] = useState(false)
//   const [products, setProducts] = useState(null);
//   useEffect(() => {
//     getAllProducts(setProducts);
//   }, []);
//   console.log(products)
  return (
    <div className="header bg-white dark:bg-black">
      <div className="container">
        <div className="wrapp er flex justify-between items-center">
          <div className="logo">
            <a href="#">
              <h1 className="text-[35px] font-[800]">KitobUz</h1>
            </a>
          </div>
          <nav className="w-[750px] flex justify-between items-center">
            <a href="#" className="hover:text-green-800 font-medium p-2 link">
              {" "}
              <img src={Loc} alt="loc" className="inline mx-1" />
              Toshkent shahar
            </a>
            <form className="w-[400px] flex justify-between items-cente"> 
            <label className="font-bold text-[32xp]"> Valyuta: 
            <select className="border p-1 rounded shadow font-medium mx-1">
                    <option value="sum">SUM</option>
                    <option value="usd">USD</option>
                    <option value="rub">RUB</option>
            </select>
            </label>
            <label className="font-bold text-[32xp]"> Language: 
            <select className="border p-1 rounded shadow font-medium mx-1">
                    <option value="uz">UZB</option>
                    <option value="eng">ENG</option>
                    <option value="rus">RUS</option>
                </select> 
            </label>

            </form>
            <button style={dark?{backgroundColor: "rgba(98, 99, 95, 0.767)"}:{backgroundColor: "rgba(188, 198, 107, 0.767)"} } onClick={()=> setDarck(!dark)} className="p-2 text-[22px] px-3 border  rounded">
              <img src={dark ? Moon : Sun} alt="darckLight" /> 
              </button>
          </nav>
          <div className="btn w-[230px] flex justify-between items-center">
            <button className="add bg-green-600 p-2 px-4 rounded text-white font-medium">
              Add
            </button>
            <button className="singIn bg-yellow-400 p-2 px-4 font-medium rounded">
              Ro`yxatdan o`tish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
