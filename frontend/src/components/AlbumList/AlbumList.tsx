import { Album } from "../../interfaces/albumsResponseInterface";
import { AlbumComponent } from "../AlbumComponent";
import "./AlbumList.css";

interface Props {
  albums: Album[];
}

const AlbumList = ({ albums }: Props) => {
  return (
    <section className="list">
      {albums.map((a) => (
        <AlbumComponent key={a.id} album={a} />
      ))}
    </section>
  );
};

export default AlbumList;
