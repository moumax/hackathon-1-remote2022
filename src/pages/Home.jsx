import React from "react";
import Header from "../components/Header";
import RandomApi from "../components/RandomApi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Header />
      <RandomApi />
      <Footer />
    </div>
  );
};

export default Home;
