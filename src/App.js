import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Contact from "./pages/Contact";

import banner_iphone from './images/banner-iphone.png'
import banner_ipad from './images/banner-ipad.png'
import banner_mac from './images/banner-mac.png'
import banner_watch from './images/banner-watch.png'
import banner_sound from './images/banner-sound.png'
import banner_access from './images/banner-accessory.png'
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Menu */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/iphone" element={<ShopCategory title='iPhone' banner={banner_iphone} category='iphone'/>} />
        <Route path="/ipad" element={<ShopCategory title='iPad' banner={banner_ipad} category='ipad'/>} />
        <Route path="/macbook" element={<ShopCategory title='Mac' banner={banner_mac} category='mac'/>} />
        <Route path="/watch" element={<ShopCategory title='Watch' banner={banner_watch} category='watch'/>} />
        <Route path="/sound" element={<ShopCategory title='Âm thanh' banner={banner_sound} category='sound'/>} />
        <Route path="/accessory" element={<ShopCategory title='Phụ kiện' banner={banner_access} category='accessory'/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product/:productId" element={<Products />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      {/* /Menu */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
