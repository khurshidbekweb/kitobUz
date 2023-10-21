import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="dark:bg-slate-500 dark:text-white">
    <App />
    </div>    
    <ToastContainer 
      position="top-right"
      autoClose={1500}
    />
  </BrowserRouter>
);
