import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/result.css";

const list = require("../assets/aliments.json");

const RandomApi = ({ selectedType, filterByType }) => {
  const [aliment, setAliment] = useState("");
  const [score, setScore] = useState(0);
  const [idSelected, setIdSelected] = useState([1]);
  const [scoreTotal, setScoreTotal] = useState(0);
  const [state, setState] = useState(0);

  const filterLIst = (e) => {
    setIdSelected(e.target.value);
  };

  const resetScore = () => {
    setScore(0);
  };

  const API = `https://koumoul.com/data-fair/api/v1/datasets/agribalyse-synthese/lines?format=json&q_mode=simple&qs=${idSelected}`;

  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      console.log(`Id: ${obj}`);
    }
    axios
      .get(API)
      .then((response) => response.data)
      .then((data) => {
        setAliment(data.results[0].Nom_du_Produit_en_Français);
        setScore(data.results[0]["Score_unique_EF_(mPt/kg_de_produit)"]);
      })
      .catch((e) => console.error(e));
  }, [idSelected]);

  useEffect(() => {
    if (state.count >= 10 || state.count <= -10) {
      setState({ ...state, incValue: 10 });
    }
  }, [state.count]);

  function getinnerText() {
    setState(state + 1);
    const newProduct = document.createElement("li");
    newProduct.textContent = `${aliment}`;
    document.querySelector(".essayons").appendChild(newProduct);
    setScoreTotal(scoreTotal + score);
    return false;
  }
  console.log(API);
  return (
    <div>
      <h1>Random API - La bouffe</h1>
      <form className="">
        <label htmlFor="type-select">
        Filter by{" "}
          <select onChange={filterByType} className="filterbar">
            <option value="">---</option>
            {/* Condition dans la liste */}
            {list.map((aliment) => (
              <option value={aliment.type} key={aliment.id}>{" "}{aliment.type}{" "}</option>
            ))}
          </select>
      </label>
      </form>
      <div>
      </div>
      <p>Score de l'ingrédient sélectionné : {score}</p>
      <p>Score total : {}</p>
      <button onClick={resetScore}>Reset</button>

      <p>
        Score de l'ingrédient sélectionné : {score}
        <button type="button" onClick={() => getinnerText()}>
          Get
        </button>
      </p>
      <div className="toAdd">Score de tout les ingrédients : {scoreTotal}</div>
      <div>Score EF : {scoreTotal / 10 / state}</div>
      <div className="totalll"></div>
      <div className="essayons"></div>
      <div>
        {(() => {
          if (scoreTotal / 10 / state < 0.035) {
            return <div className="green">Yeah</div>;
          } else if (scoreTotal / 10 / state > 0.035) {
            return <div className="red">Oh, fuuuck !</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default RandomApi;
