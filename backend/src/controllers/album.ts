import { Request, Response } from "express";
import { getToken } from "../utils/getToken";
import axios from "axios";
import { SearchResponse } from "../interfaces/searchResponseInterfaces";
import { ArtistAlbumsResponse } from "../interfaces/artistAlbumsResponse";
import { AlbumsResponse } from "../interfaces/albumsReponseInterface";

export default {
  getAlbums: async (req: Request, res: Response) => {
    //get the ip
    const ip = req.ip;
    const { artist: artistName } = req.body as { artist: string };

    //encode the artist name from the request body
    const encodedArtistName = encodeURI(artistName);

    //generate the token
    const token = await getToken();

    //get the artist from the search endpoint
    try {
      const {
        data: {
          artists: {
            items: [artist], //destructuring the first artist from the items array
          },
        },
      } = await axios.get<SearchResponse>(
        `https://api.spotify.com/v1/search?query=${encodedArtistName}&offset=0&limit=1&type=artist`,
        {
          headers: {
            Authorization: token || "",
          },
        }
      );

      //if the artist is not found, return an empty array right away
      if (!artist) return res.json([]);

      //get the artist's albums from the artists endpoint using the artist.id
      //that was extracted from previous request
      const {
        data: { items }, //destructuring items array from response (array of albums)
      } = await axios.get<ArtistAlbumsResponse>(
        `https://api.spotify.com/v1/artists/${artist.id}/albums?offset=0&include_groups=album`,
        {
          headers: {
            Authorization: token || "",
          },
        }
      );

      //string to store all albums ids separated with a comma
      let albumsIds = "";

      //loop through the albums array
      items.forEach((album, idx) => {
        if (idx + 1 < items.length) {
          //check if it's the last item in the array
          albumsIds = albumsIds + album.id + ","; //if not, add a comma after the id
        } else {
          albumsIds = albumsIds + album.id; //else if item it's the last one don't add a comma
        }
      });

      //get the albums details from the albums endpoint passing the albumsIds string
      //as a parameter
      const {
        data: { albums }, //destructuring the albums array from the response
      } = await axios.get<AlbumsResponse>(
        `https://api.spotify.com/v1/albums?ids=${albumsIds}`,
        {
          headers: {
            Authorization: token || "",
          },
        }
      );

      //sort by popularity in descending order
      albums.sort((a, b) => b.popularity - a.popularity);

      //return the albums
      return res.json(albums);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return res.json([]);
      }
    }
  },
};
