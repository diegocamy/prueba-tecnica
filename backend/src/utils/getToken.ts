import axios from "axios";

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getToken = async (): Promise<string | undefined> => {
  try {
    const { data } = await axios.post<TokenResponse>(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    return data.token_type + " " + data.access_token;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
