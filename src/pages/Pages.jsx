import Home from "./Home";
import Cuisine from "./Cuisine";
import React from 'react';
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Pages;