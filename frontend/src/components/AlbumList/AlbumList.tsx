import { Album } from "../../interfaces/albumsResponseInterface";
import { AlbumComponent } from "../AlbumComponent/AlbumComponent";
import "./AlbumList.css";

interface Props {
  albums: Album[] | undefined;
}

const AlbumList = ({ albums }: Props) => {
  return (
    <section className="list">
      {albums && albums.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        albums?.map((a) => <AlbumComponent key={a.id} album={a} />)
      )}
    </section>
  );
};

export default AlbumList;
