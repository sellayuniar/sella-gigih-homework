import axios from "axios";
import { ItemParams, ResponseAddItemToPlaylist } from "../spotify";

export const addItemToPlaylist = async (accessToken: string, playlist_id: string, itemParams: ItemParams): Promise<ResponseAddItemToPlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}` 
    }

    const data = await axios
        .post(
            `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error);
    return data;
}