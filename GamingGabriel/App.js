import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Popular from "./Components/Popular";
import Products from "./Components/Products";
import CSupport from "./Components/CSupport";
import RDR2 from "./Components/Dropdown/RDR2";
import RDR from "./Components/Dropdown/RDR";
import GTA from "./Components/Dropdown/GTA";
function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/support" element={<CSupport/>}/>
      <Route path="/rdr" element={<RDR/>}/>
      <Route path="/rdr2" element={<RDR2/>}/>
      <Route path="/gta" element={<GTA/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
