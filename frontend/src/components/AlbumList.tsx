import { Album } from "../interfaces/albumsResponseInterface";
import { AlbumComponent } from "./AlbumComponent";

interface Props {
  albums: Album[];
}

const AlbumList = ({ albums }: Props) => {
  return (
    <section>
      {albums.map((a) => (
        <AlbumComponent key={a.id} album={a} />
      ))}
    </section>
  );
};

export default AlbumList;
