import React from "react";
import "../styles/FoodAnalysis.css";

const basketimg = require("../assets/img/basket-logo.png");

const Basket = () => {
  return (
    <div className="containerbasket">
      <div className="scoreitems">
        <h2>Your Foodie Score</h2>
      </div>
      <div className="counter">
        <p>GLOBAL SCORE</p>
      </div>
      <div className="counterbox">
        <img src={basketimg} />
      </div>
    </div>
  );
};

export default Basket;
