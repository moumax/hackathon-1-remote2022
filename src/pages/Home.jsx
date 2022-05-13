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
            <span className="lettrine">B</span>ienvenue sur FoodieScore !
            <br /> FoodieScore a pour but de sensibiliser la population sur
            l'impact environnemental que génère notre mode de consommation au
            niveau alimentaire. Nous mettons à disposition un outil qui vous
            permet de créer une liste de shopping alimentaire virtuelle et
            d'obtenir un score global. <br />
            <span className="important">Comment est-ce calculé ?</span> Pour
            chaque produit, un score unique est calculé à partir de 16
            indicateurs d'impact. Ils correspondent à ceux préconisés par la
            Commission Européenne dans le cadre des travaux sur le projet
            “Product Environmental Footprint”. Parmi ces indicateur, il y a
            l'impact sur le changement climatique, les particules fines,
            l'appauvrissement de la couche d'ozone, l'épuisement des ressources
            en eau, l'usage des terres et la toxicité. Tous ces exemples sont en
            lien entre autre avec le type d'agriculture, de transport et de
            conditionnement. <br />
            Et maintenant ?{" "}
            <span className="important">Qu'attendez vous pour agir ?</span>{" "}
            Essayez notre simulateur et tentez de voir sur quels aspects de
            votre consommation vous pouvez vous améliorer.
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
