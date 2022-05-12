import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomApi = () => {
  const [aliment, setAliment] = useState();
  const [score, setScore] = useState();

  const API =
    "https://koumoul.com/data-fair/api/v1/datasets/agribalyse-synthese/lines?format=json&q_mode=simple&qs=6212";

  useEffect(() => {
    axios
      .get(API)
      .then((response) => response.data)
      .then((data) => {
        setAliment(data.results[0].Nom_du_Produit_en_Français);
        setScore(data.results[0]["Score_unique_EF_(mPt/kg_de_produit)"]);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h1>Random API - La bouffe</h1>
      <h2>{aliment}</h2>
      <h3>{score}</h3>
    </div>
  );
};

export default RandomApi;
