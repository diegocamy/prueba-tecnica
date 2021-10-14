import axios from "axios";
import "./App.css";

function App() {
  const handleClick = async () => {
    const { data } = await axios.post("/api/getAlbums");
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>ClickME</button>
    </div>
  );
}

export default App;
