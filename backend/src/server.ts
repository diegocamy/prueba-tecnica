import express from "express";
import dotenv from "dotenv";
import { getToken } from "./utils/getToken";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/api/getAlbums", async (req, res) => {
  const ip = req.ip;
  const token = await getToken();
  try {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/search?query=eminem&offset=0&limit=20&type=album",
      {
        headers: {
          Authorization: token || "",
        },
      }
    );

    return res.json({
      ip,
      albums: data,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
