import { useState } from "react";
import AlbumList from "../components/AlbumList/AlbumList";
import SearchInput from "../components/SearchInput/SearchInput";
import Spinner from "../components/Spinner/Spinner";
import { Album } from "../interfaces/albumsResponseInterface";

export const Home = () => {
  const [albums, setAlbums] = useState<Album[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <SearchInput
        setAlbums={setAlbums}
        setLoading={setLoading}
        loading={loading}
      />
      {loading ? <Spinner /> : <AlbumList albums={albums} />}
    </div>
  );
};
