import React from "react";

const img1 = require("../assets/img/kevin-fromage.png");

const FoodItem = ({ nom, img }) => {
  return (
    <div className="fooditem">
      <img src={img1} className="imgItem" />
      <div>{nom}</div>
    </div>
  );
};

export default FoodItem;
