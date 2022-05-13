import React from "react";
import "../assets/aliments.json";
import FoodAnalysis from "../pages/FoodAnalysis";

const FoodItem = ({ nom, pic, fnc }) => {
  return (
    <div className="fooditem" onClick={fnc}>
      <img src={pic} alt={nom} className="imgItem" />
      <div>{nom}</div>
    </div>
  );
};

export default FoodItem;
