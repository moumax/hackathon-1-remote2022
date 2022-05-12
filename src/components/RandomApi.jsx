import React, { useState, useEffect } from "react";
import axios from "axios";

const list = require("../assets/aliments.json");

const RandomApi = () => {
  const [aliment, setAliment] = useState();
  const [score, setScore] = useState();
  const [idSelected, setIdSelected] = useState();
  const [scoreTotal, setScoreTotal] = useState();

  const filterLIst = (e) => {
    setIdSelected(e.target.value);
  };

  const resetScore = () => {
    setScore(0);
  };

  const calculScore = score === scoreTotal;

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

  return (
    <div>
      <h1>Random API - La bouffe</h1>
      <select onChange={filterLIst}>
        {list.map((acc) => (
          <option key={acc.id}> {acc.nom} </option>
        ))}
      </select>
      <p>Score de l'ingrédient sélectionné : {score}</p>
      <p>Score total : {}</p>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
};

export default RandomApi;
