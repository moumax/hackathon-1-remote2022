import React from "react";
import "../assets/aliments.json";

const FoodItem = ({ nom, pic }) => {
  return (
    <div className="fooditem">
      <img src={pic} alt={nom} className="imgItem" />
      <div>{nom}</div>
    </div>
  );
};

export default FoodItem;
