import axios from "axios";
import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const { data } = await axios.post("/api/getAlbums", { artist });
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
