import React from "react";
const list = require("../assets/aliments.json");

const img1 = require("../assets/img/kevin-fromage.png");

const FoodItem = () => {
  return (
    <div>
      <div>{list.nom}</div>
      <img src={list.img} className="imgItem" />
    </div>
  );
};

export default FoodItem;
