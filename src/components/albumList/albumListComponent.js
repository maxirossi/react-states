
import { render } from '@testing-library/react';
//import Card from '../card';
import Card from '../cardWithEvents';
import {config} from '../../config.js';

function AlbumList(props){
  const albumns = props.lista;
  const listItems = albumns.map((album) =>
    <Card 
    agrupacion={album.agrupacion} 
    genero={album.genero} 
    artista={album.artista} 
    titulo={album.titulo} 
    lanzamiento={album.lanzamiento} 
    portada={album.portada} 
    />,
  );
    return(
        <div>
           {listItems}
        </div>
    )
}

export default AlbumList;