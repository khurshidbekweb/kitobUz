import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {context} from './context/context'
import { useState } from "react";
// import Header from "./components/Header";

function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode' || 'light'))  

    if(mode == 'dark'){
      document.querySelector('html').classList.remove('light');
      document.querySelector('html').classList.add('dark');
      localStorage.setItem('mode', "dark")
    }
    if(mode == 'light'){
      document.querySelector('html').classList.remove('dark');
      document.querySelector('html').classList.add('light');   
      localStorage.setItem('mode', "light")

    }  
  return (
    <>
    <context.Provider value={{mode,setMode}}>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </context.Provider>
    </>
  );
}

export default App;
