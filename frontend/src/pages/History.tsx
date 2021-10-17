import axios from "axios";
import { useEffect, useState } from "react";
import { SearchHistoryObject } from "../interfaces/searchHistoryInterface";

export const History = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryObject[]>([]);
  useEffect(() => {
    async function fetchHistory() {
      try {
        const { data } = await axios.get<SearchHistoryObject[]>("/api/search");
        setSearchHistory(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchHistory();
  }, []);
  return (
    <div>
      <h2>Historial de búsquedas</h2>
      <table>
        <tr>
          <th>IP</th>
          <th>Artista</th>
          <th>Fecha</th>
        </tr>
        {searchHistory.map((e) => (
          <tr key={e.id}>
            <td>{e.ip}</td>
            <td>{e.artist}</td>
            <td>{e.created_at}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
