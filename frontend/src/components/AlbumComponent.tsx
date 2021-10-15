import { Album } from "../interfaces/albumsResponseInterface";

interface Props {
  album: Album;
}

export const AlbumComponent = ({ album: { images, name } }: Props) => {
  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
      <img src={images[0].url} alt={name} />
    </div>
  );
};
