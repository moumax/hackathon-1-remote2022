import React from "react";
import "../styles/FoodAnalysis.css";

const basketimg = require("../assets/img/basket-logo.png");

const Basket = () => {
  return (
    <div className="containerbasket">
      <div className="scoreitems">
        <h2>Your Foodie Score</h2>
      </div>
      <div className="resize">
          <article>item 1</article>
          <article>item 2</article>
          <article>item 3</article>
          <article>item 4</article>
          <article>item 5</article>
          <article>item 6</article>
          <article>item 7</article>
          <article>item 8</article>
          <article>item 9</article>
          <article>item 10</article>
          <article>item 11</article>
          <article>item 12</article>
          <article>item 13</article>
          <article>item 14</article>
          <article>item 15</article>
          <article>item 16</article>
          <article>item 17</article>
          <article>item 18</article>
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
