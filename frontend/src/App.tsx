import { useState } from "react";
import AlbumList from "./components/AlbumList/AlbumList";
import SearchInput from "./components/SearchInput/SearchInput";
import { Album } from "./interfaces/albumsResponseInterface";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <SearchInput
        setAlbums={setAlbums}
        setLoading={setLoading}
        loading={loading}
      />
      <AlbumList albums={albums} />
    </div>
  );
}

export default App;
