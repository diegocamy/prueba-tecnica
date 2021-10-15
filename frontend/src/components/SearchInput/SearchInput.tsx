import axios from "axios";
import { useState, FormEvent } from "react";
import { Album } from "../../interfaces/albumsResponseInterface";
import "./SearchInput.css";

interface Props {
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const SearchInput = ({ setAlbums }: Props) => {
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const { data } = await axios.post<Album[]>("/api/getAlbums", { artist });
    setAlbums(data);
    setLoading(false);
  };

  return (
    <section className="search-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Buscar albums</label>
        <input
          name="artist"
          placeholder="Ingrese el nombre del artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
    </section>
  );
};

export default SearchInput;
