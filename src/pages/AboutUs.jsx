import Footer from "../components/Footer";
import "../styles/PersonalCard.css";

const github = require("../assets/img/github.png");

function AboutUs() {
  return (
    <div>
    <div className="containercards">
      <div className="card1">
        <div className="namecard">
          <h1>Frédérique DEMAS</h1>
        </div>
        <div className="score">
          <img className='imgGit' src={github} alt="Logo github"/>
          <p className='points'>1.9 PTS</p>
        </div>
        <p>Foodie Card</p>
      </div>
      <div className="card2">
        <div className="namecard">
          <h1>Marc LANTOL</h1>
        </div>
        <div className="score">
          <img className='imgGit' src={github} alt="Logo github"/>
          <p className='points'>1.7 PTS</p>
        </div>
        <p>Foodie Card</p>
      </div>
      <div className="card3">
        <div className="namecard">
          <h1>Kevin PESET</h1>
        </div>
        <div className="score">
         <img className='imgGit' src={github} alt="Logo github"/>
          <p className='points'>3.9 PTS</p>
        </div>
        <p>Foodie Card</p>
      </div>
      <div className="card4">
        <div className="namecard">
          <h1>Lou GAIN</h1>
        </div>
        <div className="score">
          <img className='imgGit' src={github} alt="Logo github"/>
          <p className='points'>1.2 PTS</p>
        </div>
        <p>Foodie Card</p>
      </div>
      <div className="card5">
        <div className="namecard">
          <h1>Emma BIGNON</h1>
        </div>
        <div className="score">
          <img className='imgGit' src={github} alt="Logo github"/>
          <p className='points'>2.2 PTS</p>
        </div>
        <p>Foodie Card</p>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AboutUs;

/* <ul>
        <li key={team.name}>
          {team && 
          team.map((name)=>
           <PersonalCard name={name.name} pts={name.pts}/>)}
        </li>
      </ul> */
