import React from "react";

const img1 = require("../assets/img/kevin-fromage.png");

const FoodItem = ({ nom, img }) => {
  return (
    <div className="fooditem">
      <div>{nom}</div>
      <img src={img1} className="imgItem" />
    </div>
  );
};

export default FoodItem;
