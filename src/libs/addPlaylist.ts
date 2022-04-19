import axios from "axios";
import { ResponsePlaylist, PlaylistParams } from "../spotify";

export const addPlaylist = async (accessToken: string, userID: string, playlistData: PlaylistParams): Promise<ResponsePlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}`
    }
    const bodyParams = { 
        name: playlistData.name,
        description: playlistData.description,
        collaborative: false,
        public: false
    }
    const data = await axios 
        .post(
            `https://api.spotify.com/v1/users/${userID}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    return data.data;
}