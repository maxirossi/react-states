import './styles.css';

function Card(props) {

    const saludar = () => {
      console.log('Hola!');
    };

    return (
    <div className="album-container">
      <div className="album-contenido">
        <img onClick={saludar} height="100%" src={props.portada} alt="album cover" />
      </div>
      <div className="album-info">
        <h1 className="album-titulo">{props.artista}</h1>
        <h3>{props.agrupacion}</h3>
        <p className="album-subtitulo">{props.titulo}</p>
        <p>({props.lanzamiento})</p>
        <div className="genero">{props.genero}</div>
      </div>
    </div>
    )
}

export default Card;

