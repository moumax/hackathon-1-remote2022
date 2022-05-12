import React from "react";
import Header from "../components/Header";
import RandomApi from "../components/RandomApi";
import Footer from "../components/Footer";
import FoodAnalysis from "./FoodAnalysis";

const Home = () => {
  return (
    <div className="background">
      <div className="container-background">
        <Header />
        <RandomApi />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
