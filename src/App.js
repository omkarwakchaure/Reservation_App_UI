import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar";
import React, { Component }  from 'react';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Hotels" element={<List/>}/>
      <Route path="/Hotels/:id" element={<Hotel/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
