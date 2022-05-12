import React from "react";
import FoodItem from "../components/FoodItem";
import "../styles/App.css"
import "../styles/variables.css"

const foodList = require ("../assets/aliments.json");

function FoodAnalysis() {
    return (
      <div className="foodlist">
        {foodList &&
        foodList.map((item) => (
          <article key={item.name}>
            <FoodItem
            key={item.name}
            name={item.name}
            image={item.img}
             />
          </article>
        ))}
      </div>
    );
  };
  
export default FoodAnalysis;