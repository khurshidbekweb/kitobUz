// import { useState } from "react";
// import { customAxios } from "../configs/axios.config";
import Loc from "../image/place.svg";
import "./Header.css";
// import { useEffect } from "react";
// import { getAllProducts } from "../utils/getAllProducts";

function Index() {
//   const [products, setProducts] = useState(null);
//   useEffect(() => {
//     getAllProducts(setProducts);
//   }, []);
//   console.log(products)
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper flex justify-between items-center">
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
            <a href="#" className="link hover:text-green-800 font-medium p-2">
              Almashaman
            </a>
            <a href="#" className="link hover:text-green-800 font-medium">
              Vaqtincha almashaman
            </a>
            <a href="#" className="link hover:text-green-800 font-medium">
              Sotaman
            </a>
            <a href="#" className="link hover:text-green-800 font-medium">
              Hadya
            </a>
            <a href="#" className="link hover:text-green-800 font-medium">
              Izlayapman
            </a>
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

export default Index;
