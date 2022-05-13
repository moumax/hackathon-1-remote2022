import "../styles/Footer.css";
const wildLogo = require("../assets/img/wcs.png");

function Home() {
  return (
    <div className="bottom-container">
      <div className="footer-container">
        <div className="credits-left">
          <a
            className="footer-link"
            href="https://api.gouv.fr/les-api/api_agribalyse"
          >
            API Agribalyse
          </a>
        </div>
        <div className="credits-right">
          <a href="https://www.wildcodeschool.com/fr-FR">
            <img src={wildLogo} alt="logo wild code school" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
