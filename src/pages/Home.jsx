import React from "react";
import Header from "../components/Header";
<<<<<<< HEAD
import RandomApi from "../components/RandomApi"
=======
import RandomApi from "../components/RandomApi";
>>>>>>> 1302cfe494d4bbf805b308758efb1a3963a78220
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
