import axios from "axios"
import { ResponseUser } from "../spotify";

export const fetchUser = async (accessToken: string): Promise<ResponseUser> => {
    const data = await axios // get user data
        .get(
            `https://api.spotify.com/v1/me?access_token=${accessToken}`
        )
        .catch((error) => error)
    return data.data;
}