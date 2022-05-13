import React from "react";
import "../assets/aliments.json";

const FoodItem = ({ nom, pic }) => {
  return (
    <div className="fooditem">
      <img src={pic} alt={nom} className="imgItem" />
      <div className="fontsize">{nom}</div>
    </div>
  );
};

export default FoodItem;
