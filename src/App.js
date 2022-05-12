import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="background">
      <div className="container-background">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
