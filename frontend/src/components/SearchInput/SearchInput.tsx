import axios from "axios";
import { useState, FormEvent } from "react";
import { Album } from "../../interfaces/albumsResponseInterface";
import "./SearchInput.css";

interface Props {
  setAlbums: React.Dispatch<React.SetStateAction<Album[] | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const SearchInput = ({ setAlbums, loading, setLoading }: Props) => {
  const [artist, setArtist] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Buscar
        </button>
      </form>
    </section>
  );
};

export default SearchInput;
