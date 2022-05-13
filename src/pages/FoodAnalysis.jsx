import React, { useState } from "react";
import FoodItem from "../components/FoodItem";
import RandomApi from "../components/RandomApi";
import Basket from "../components/Basket";
import "../styles/FoodAnalysis.css";
import "../styles/App.css";
import "../styles/variables.css";

const foodList = require("../assets/aliments.json");

function FoodAnalysis() {
  const [selectedType, setselectedType] = useState("");
  const filterByType = (e) => {
    setselectedType(e.target.value);
  };
  console.log(selectedType)

    return (
      <div className="foodItem-container">
        <div className="basket">
          <Basket />
        </div>
        <div className="filter">
        <RandomApi filterByType={filterByType} selectedType={selectedType} foodList={foodList}/>
      </div>
      <div className="foodlist">
        {foodList &&
          foodList
          .filter(
            (aliment) =>
            selectedType
                ? aliment.type === selectedType
                : aliment)
          .map((item) => (
            <article key={item.id}>
              <FoodItem key={item.id} nom={item.nom} pic={item.img} />
            </article>
          ))}
      </div>
    </div>
  );
}

export default FoodAnalysis;
