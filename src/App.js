import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/detail/Table"
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/detail/:dataId" element={<Table/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
  </BrowserRouter>
  );
}

export default App;
