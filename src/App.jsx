// Import Pages]
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage";
import DashHome from './pages/Dashboard/Home'
import Author from './pages/Dashboard/Author'
import Books from './pages/Dashboard/Books'
import Language from "./pages/Dashboard/Language";
// Import Hooks
import { Route, Routes } from "react-router-dom";
import {context} from './context/context'
import { useState } from "react";
// IMpors Css
import "./App.css";
import Ganre from "./pages/Dashboard/Ganre";
import Translate from "./pages/Dashboard/translate";

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
        <Route path="/dashboard"  element={<Dashboard />}>
          <Route index element ={<DashHome/>}/>
          <Route path="books" element= {<Books/>}/>
          <Route path="author"  element= {<Author/>}/>
          <Route path="ganre"  element= {<Ganre/>}/>
          <Route path="language"  element= {<Language/>}/>
          <Route path="translate"  element= {<Translate/>}/>
        </Route>
      </Routes>
    </context.Provider>    
    </>
  );
}

export default App;
