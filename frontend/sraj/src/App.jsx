import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar/Topbar";
import Navbar from "./pages/global/Navbar/Navbar";
import { Box, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Jewellery from './pages/Jewellery/Jewellery';
import Juttis from './pages/Juttis/Juttis';
import Kurtas from './pages/Kurtas/Kurtas';
import Sarees from './pages/Sarees/Sarees';
import Lehengas from './pages/Lehengas/Lehengas';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import Nightwear from './pages/Nightwear/Nightwear';
import Sale from './pages/Sale/Sale';
import Dresses from "./pages/Dresses/Dresses";
import BedLinen from './pages/BedLinen/BedLinen';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/kurtas" element={<Kurtas/>}/>
            <Route path="/lehengas" element={<Lehengas/>}/>
            <Route path="/sarees" element={<Sarees/>}/>
            <Route path="/new-arrivals" element={<NewArrivals/>}/>
            <Route path="/nightwear" element={<Nightwear/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/bed-linen" element={<BedLinen/>}/>
            <Route path="/juttis" element={<Juttis/>}/>
            <Route path="/jewellery" element={<Jewellery/>}/>
            <Route path="/dresses" element={<Dresses/>}/>
          </Routes>
        </div>
      </div>
  </BrowserRouter>
  )
}

export default App;
