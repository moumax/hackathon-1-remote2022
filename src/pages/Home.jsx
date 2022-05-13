import "../styles/App.css";
import "../styles/variables.css";
import "../styles/Home.css";
const homeImage = require("../assets/img/image-home.jpg");

const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="home-text">
          <p>
            <span className="lettrine">L</span>orem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <img className="home-image" src={homeImage} alt="hand with a plant" />
      </div>
      <div className="container-quote">
        <div className="main-quote">
          <p>
            “<span className="strong-word">Healthy</span> eating is a way of
            life, so it’s important to establish routines that are simple,
            realistically, and ultimately livable.”
          </p>
        </div>
        <div className="author">
          <p>— Horace.</p>
        </div>
        <hr className="little-separator" />
      </div>
    </>
  );
};

export default Home;
