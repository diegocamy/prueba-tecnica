import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { SearchHistoryObject } from "../../interfaces/searchHistoryInterface";
import "./History.css";

export const History = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryObject[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchHistory() {
      setLoading(true);
      try {
        const { data } = await axios.get<SearchHistoryObject[]>("/api/search");
        setSearchHistory(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchHistory();
  }, []);
  return (
    <div className="history-container">
      <h2>Historial de búsquedas</h2>
      {loading ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>IP</th>
              <th>Artista</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {searchHistory.map((e) => (
              <tr key={e.id}>
                <td>{e.ip}</td>
                <td>{e.artist}</td>
                <td>{new Date(e.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
