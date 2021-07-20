import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
/* components */
import AlbumList from './components/albumList/albumListComponent';
import reportWebVitals from './reportWebVitals';
import Contador from './components/contador/contador';

const albumes = [
  {
  agrupacion: "solista",
  genero: "soul",
  artista: "The Weeknd",
  titulo: "Starboy",
  lanzamiento: "2018",
  portada:
  "https://i.pinimg.com/originals/48/24/93/48249335e8c3852d59a5a27e054bb8d2.jpg"
  },
  {
  agrupacion: "solista",
  genero: "pop",
  artista: "Sia",
  titulo: "Cheap Thrills",
  lanzamiento: "2017",
  portada: "https://i1.sndcdn.com/artworks-000174898618-vsdrz9-t500x500.jpg"
  },
  {
  agrupacion: "banda",
  genero: "rock",
  artista: "Queen",
  titulo: "The Miracle",
  lanzamiento: "1989",
  portada:
  "https://images-na.ssl-images-amazon.com/images/I/71X9RN0Y47L._SX425_.jpg"
  },
  {
  agrupacion: "solista",
  genero: "pop",
  artista: "Ariana Grande",
  titulo: "Sweetener",
  lanzamiento: "2017",
  portada:
  "https://images-na.ssl-images-amazon.com/images/I/61zN9VJGynL._SL1200_.jpg"
  },
  {
  agrupacion: "banda",
  genero: "pop",
  artista: "NSYNC",
  titulo: "No strings attached",
  lanzamiento: "2000",
  portada:
  "https://images-na.ssl-images-amazon.com/images/I/71s1PeC%2BuFL._SX425_.jpg"
  }
 ]

ReactDOM.render(
  <React.StrictMode>
  <AlbumList lista={albumes}></AlbumList>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
