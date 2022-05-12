import React from "react";
import Header from "../components/Header";
import RandomApi from "../components/RandomApi"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <header className="background">
      <div className="container-background">
        <Header />
        <RandomApi />
        <Footer />
      </div>
    </header>
  );
};

export default Home;
