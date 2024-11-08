import React from "react";
import CardMedia from "@mui/material/CardMedia";
import "./PersonalCard.css";

const PersonalCard = () => {
  return (
    <div id="main">
      <div id="fondo"></div>
      <CardMedia
        component="img"
        // height="300"
        image={"../../src/assets/AleyMiguel.jpg"}
        alt="character Card"
        id="img-personal"
      />
      <div id="info">
        <h2>Aley Miguel Angel</h2><br/>
        <p>Estudiante de Ingenieria de Sistemas</p>
        <p>Programación Web Grupo 2</p>
      </div>
    </div>
  );
};

export default PersonalCard;
