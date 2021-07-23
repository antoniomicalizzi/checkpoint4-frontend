import main from '../../assets/image.png';

import './Homepage.css';

function Homepage() {
  return (
    <div className="home">
      <img className="main-pic" src={main} alt="main-pic" />
      <h1>Make your stuff great again</h1>
      <h2>Trouve un ponint de ré-use pour tes veiux objets</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        aspernatur incidunt asperiores iste eos. Delectus voluptates, incidunt
        eius, magni, obcaecati nam nobis atque placeat repellat consequatur
        repudiandae illum consequuntur nesciunt!
      </p>
      <button type="button">Go</button>
    </div>
  );
}

export default Homepage;
