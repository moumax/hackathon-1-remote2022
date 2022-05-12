import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
// const logo = require("../assets/img/veggies-logo.png");

function NavBar() {
    return (
        <nav className="navbar">
          <div className="logo">
            {/* <img src={logo} alt="logo"/> */}
            <h1>Foodie Score</h1>
          </div>
          <div className="pages">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/foodAnalysis">
              Food Analysis
            </NavLink>
            <NavLink to="/aboutUs">
              About Us
            </NavLink>
          </div>
        </nav>
    );
  };
  
export default NavBar;