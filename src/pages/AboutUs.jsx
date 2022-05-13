import Footer from "../components/Footer";
import PersonalCard from "../components/PersonalCard";

const team = [
  { name: "Emma BIGNON", pts: "2.2 PTS" },
  { name: "Lou GAIN", pts: "1.2 PTS" },
  { name: "Kevin PESET", pts: "3.9 PTS" },
  { name: "Marc LANTOL", pts: "1.7 PTS" },
  { name: "Frédérique DEMAS", pts: "1.9 PTS" },

];

function AboutUs() {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li key="">
          {team && 
          team.map((name)=>
           <PersonalCard name={name.name} pts={name.pts}/>)}
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default AboutUs;
