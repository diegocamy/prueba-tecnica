import axios from "axios";
import { useState, FormEvent } from "react";
import { Album } from "../interfaces/albumsResponseInterface";

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
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Nombre del artista</label>
        <input
          name="artist"
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
