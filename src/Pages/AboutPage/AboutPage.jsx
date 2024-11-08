import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../../Components/CharCard/CharCard";
import PersonalCard from "../../Components/PersonalCard/PersonalCard";

const AboutPage = () => {
  const [data, setData] = useState({});

  let { id } = useParams(); // Obtener el parámetro 'id' de la URL

  useEffect(() => {
    if (id != 0) {
      axios
        .get(`https://dragonball-api.com/api/characters/${id}`)
        .then((char) => setData(char.data));
    }
  }, []);

  if (id == 0) {
    // Mostrar contenido alternativo si no hay id
    return (
      <main id="about-page">
        {/* <h1>Información de Personaje no Disponible</h1>
        <p>Por favor selecciona un personaje desde la página principal o desde alguna de las opciones.</p> */}
        <PersonalCard />
        {/* <img
          id="alternative-img"
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/dragon-ball-significan-nombres-personajes-1858451.jpg?tf=3840x"
          alt="personajes de dragon ball super"
        /> */}
      </main>
    );
  }
  return (
    <main id="about-page">
      <h1 id="title-character">Información sobre {data.name}</h1>
      <div id="area">
        <CharCard
          img={data.image}
          nombre={data.name}
          especie={data.race}
          genero={data.gender}
          ki={data.ki}
          kiMax={data.maxKi}
          grupo={data.affiliation}
        />
        <div id="imagenFondo">
          <p id="descripcion">{data.description}</p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
