import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/CharCard/CharCard";

const CharacterPage = () => {
  const [data, setData] = useState([]);

  let { race } = useParams();

  useEffect(() => {
    axios
      .get(`https://dragonball-api.com/api/characters`)
      .then((char) => setData(char.data.items));
  }, []);

  // const tmp = data.filter((elem) => elem.race === race);

  const tmp =
    race === "NoHuman"
      ? data.filter((elem) => elem.race !== "Human")
      : data.filter((elem) => elem.race === race);

  return (
    <main id="character-page">
      <h1 id="title-character">Character Page</h1>
      {
        <div id="characters-race">
          {tmp.map((element) => (
            <div key={element.id}>
              <Link to={"/details/" + element.id}>
                <CharCard
                  img={element.image}
                  nombre={element.name}
                  especie={element.race}
                  genero={element.gender}
                  ki={element.ki}
                  kiMax={element.maxKi}
                  grupo={element.affiliation}
                />
              </Link>
            </div>
          ))}
        </div>
      }
    </main>
  );
};

export default CharacterPage;
