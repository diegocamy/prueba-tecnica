import { useState } from "react";
import { Album } from "../../interfaces/albumsResponseInterface";
import "./AlbumComponent.css";

interface Props {
  album: Album;
}

export const AlbumComponent = ({
  album: { images, name, popularity },
}: Props) => {
  const [hovering, setIsHovering] = useState(false);
  return (
    <div
      className="box"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {hovering && (
        <div className="overlay">
          <h4>{name}</h4>
          <p>Popularidad: {popularity}</p>
        </div>
      )}
      <img src={images[0].url} alt={name} />
    </div>
  );
};
