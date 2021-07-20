import React, { useState } from "react";
import './styles.css';

function Card(props) {

    const hookLoveMe = useState(false);
    let lovemeValue = hookLoveMe[0]; // contiene el valor
    let updateLoveMeState = hookLoveMe[1]; // contiene el macanismo / funcionalidad para cambiar el state

    const loveMe = (e) => {
      updateLoveMeState(!lovemeValue);     
    };

    const cambiarArojo = (e) => {
      e.target.classList.add('genero-rojo');
    };

    const searchArtistInfo = (e) => {
        const name = e.target.innerHTML;
        const googleUrl = 'https://www.google.com.ar/search?q=' + name;
        window.open(googleUrl);
    }
   
    
    return (
    <div className="album-container">
      <div className="album-contenido">
        <img height="100%" src={props.portada} alt="album cover" />
      </div>
      <div className="album-info">
        <h1 onClick={searchArtistInfo} className="album-titulo">{props.artista}</h1>
        <h3>{props.agrupacion}</h3>
        <p className="album-subtitulo">{props.titulo}</p>
        <p>({props.lanzamiento})</p>
        <div className="genero">{props.genero}</div>
        <div className="loveIcon">
        <div>
        { lovemeValue ? (
           <i onClick={loveMe} className="far fa-smile loveme"></i>
        ) : (
          <i onClick={loveMe} className="far fa-smile"></i>
        )}
      </div>
        </div>
      </div>
    </div>
    )
}

export default Card;

