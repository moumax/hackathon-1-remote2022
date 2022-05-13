import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/result.css";
import FoodItem from "../components/FoodItem";
import FilterAliments from "../components/FilterAliments";
import "../styles/FoodAnalysis.css";
import "../styles/App.css";
import "../styles/variables.css";

const foodList = require("../assets/aliments.json");
const basketimg = require("../assets/img/basket-logo.png");

function FoodAnalysis() {
  const [aliment, setAliment] = useState("");
  const [score, setScore] = useState();
  const [idSelected, setIdSelected] = useState(5200);
  const [scoreTotal, setScoreTotal] = useState(0.00001);
  const [state, setState] = useState(0);

  const filterList = (e) => {
    setIdSelected(e.target.value);
  };

  const resetScore = () => {
    setScore(0);
  };

  const [selectedType, setselectedType] = useState("");
    const filterByType = (e) => {
      setselectedType(e.target.value);
    };
    console.log(selectedType)

  const API = `https://koumoul.com/data-fair/api/v1/datasets/agribalyse-synthese/lines?format=json&q_mode=simple&qs=${idSelected}`;
  const BLANK = `https://koumoul.com/data-fair/api/v1/datasets/agribalyse-synthese/`;
  useEffect(() => {
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
  }

  function essai(id, nom) {
    setIdSelected(id, nom);
    setState(state + 1);
    const dragX = document.createElement("p");
    dragX.textContent = `${nom} `;
    document.querySelector(".resize").appendChild(dragX);
    setScoreTotal(score + scoreTotal);

    return false;
    // const maZone = document.querySelector(".maZone")
    // const maListe = document.createElement("p")
    // setMonId(parm)
    // console.log(parm)
    // maListe.textContent = `${parm}`
    // // maListe.textContent = {parm};

    // // return false;
  }

  function essai2(nbre) {
    let res = nbre.toFixed(2);
    console.log(res);
  }

  return (
    <div className="globalcontainer">
      <div className="basket">
        <div className="containerbasket">
          <div className="scoreitems">
            <h2>Your Foodie Score</h2>
          </div>
          <div className="resize"></div>
          <div className="counter">
            <p>GLOBAL SCORE</p>
          </div>
          <div className="counterbox">
            <div className="myTotalScore">
              {scoreTotal / 10 / state}
              {(() => {
                if (scoreTotal / 10 / state < 0.025) {
                  return <div className="verygood">Très bien</div>;
                } else if (scoreTotal / 10 / state < 0.05) {
                  return <div className="good">Bien</div>;
                } else if (scoreTotal / 10 / state < 0.1) {
                  return <div className="middle">Moyen</div>;
                } else if (scoreTotal / 10 / state < 0.2) {
                  return <div className="bad">Il y a des efforts à faire</div>;
                } else if (scoreTotal / 10 / state < 0.2) {
                  return (
                    <div className="verybad">
                      Votre impact écologique est très important
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
      <div className="foodItem-container">
        <div className="filter">
          <FilterAliments filterByType={filterByType} selectedType={selectedType} foodList={foodList}/>
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
                <FoodItem
                  key={item.id}
                  nom={item.nom}
                  pic={item.img}
                  value={item.id}
                  fnc={() => essai(item.id, item.nom)}
                />
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FoodAnalysis;
