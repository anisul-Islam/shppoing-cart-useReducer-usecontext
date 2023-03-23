import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
