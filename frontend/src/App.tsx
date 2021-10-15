import { useState } from "react";
import "./App.css";
import AlbumList from "./components/AlbumList/AlbumList";
import SearchInput from "./components/SearchInput";
import { Album } from "./interfaces/albumsResponseInterface";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  return (
    <div className="App">
      <SearchInput setAlbums={setAlbums} />
      <AlbumList albums={albums} />
    </div>
  );
}

export default App;
