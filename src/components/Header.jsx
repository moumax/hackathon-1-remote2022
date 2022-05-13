import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
const logo = require("../assets/img/veggies-logo.png");

function NavBar() {
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "var(--accent-color)",
        textDecoration: "underline",
      };
    }
    return null;
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Foodie Score</h1>
        </div>
        <div className="pages">
          <NavLink to="/" style={getActiveLinkStyle}>
            home
          </NavLink>
          <p>・</p>
          <NavLink to="/foodAnalysis" style={getActiveLinkStyle}>
            food analysis
          </NavLink>
          <p>・</p>
          <NavLink to="/aboutUs" style={getActiveLinkStyle}>
            about us
          </NavLink>
        </div>
      </nav>
      <div className="hr-solid">
        <hr className="top-separator" />
      </div>
    </>
  );
}

export default NavBar;
