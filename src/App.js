import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodAnalysis from "./pages/FoodAnalysis";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodAnalysis" element={<FoodAnalysis />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
