import axios from "axios";
import { ResponseTracks } from "../spotify";

export const fetchTracksData = async (query: string, accessToken: string): Promise<ResponseTracks> => {
    const data = await axios
        .get(
            `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
        )
        .catch((error) => error)
    console.log(data.data.tracks.items);
    return data.data.tracks.items;
}