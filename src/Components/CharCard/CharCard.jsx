import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

import "./Charcard.css";

const CharCard = ({img="https://static-00.iconduck.com/assets.00/image-not-found-01-icon-2048x2048-95wsi7vg.png",
  nombre="-----",
  especie="-----",
  genero="-----",
  ki="-----",
  kiMax="-----",
  grupo="-----",}) => {

    
  return (
    <Card sx={{ maxWidth: 345 }} id="contenedorG" className="MuiPaper-root">
      <CardActionArea id="conteiner">
        <CardMedia
          component="img"
          // height="300"
          image={img}
          alt="character Card"
          id="imgCha"
        />
        <CardContent id="infoCard">
          <h2>{nombre}</h2>

          <p id="valores">
            {especie} - {genero}
          </p>
          <h2>Base KI:</h2>
          <p id="valores">{ki}</p>
          <h2>Total KI:</h2>
          <p id="valores">{kiMax}</p>
          <p>Afilliation:</p>
          <p id="valores">{grupo}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// CharCard.defaultProps = {
//   img: "https://static-00.iconduck.com/assets.00/image-not-found-01-icon-2048x2048-95wsi7vg.png",
//   nombre: "-----",
//   especie: "-----",
//   genero: "-----",
//   ki: "-----",
//   kiMax: "-----",
//   grupo: "-----",
// };

export default CharCard;
