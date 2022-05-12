import React from "react";
import FoodItem from "../components/FoodItem";

const foodList = require ("../assets/aliments.json");

function FoodAnalysis() {

    return (
      <div className="foodlist">
        {foodList.map((item) => (
          <article key={item.name}>
            <FoodItem
            key={item.name}
            name={item.name}
            image={item.name}
             />
          </article>
        ))}
      </div>
    );
  };
  
export default FoodAnalysis;