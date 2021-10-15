import { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { Album } from "./interfaces/albumsResponseInterface";

function App() {
  const [albums, setAlbums] = useState<Album[] | undefined>(undefined);

  return (
    <div className="App">
      <SearchInput setAlbums={setAlbums} />
      <section>
        {albums &&
          albums.map((m) => {
            return (
              <div key={m.id}>
                <img src={m.images[0].url} alt={m.name} />
                <p>{m.name}</p>
                <p>{m.release_date}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default App;
