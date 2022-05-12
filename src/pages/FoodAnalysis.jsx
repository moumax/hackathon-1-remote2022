import React from "react";
import FoodItem from "../components/FoodItem";
import RandomApi from "../components/RandomApi";
import "../styles/FoodAnalysis.css";
import "../styles/App.css"
import "../styles/variables.css"

const foodList = require ("../assets/aliments.json");

function FoodAnalysis() {
    return (
      <div>
        <RandomApi />
        <div className="foodlist">
          {foodList &&
          foodList.map((item) => (
            <article key={item.id}>
              <FoodItem
              key={item.id}
              nom={item.nom}
              img={item.img}
              />
            </article>
          ))}
        </div>
      </div>
    );
  };
  
export default FoodAnalysis;