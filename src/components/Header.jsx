import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function Home() {
    return (
        <nav className="navbar">
          <div>
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
  
export default Home;