import {API_KEY} from "./api";

export async function getTracks(query) {
    const url = `http://api.soundcloud.com/tracks.json?client_id=${API_KEY}&q=${query}&limit=50`;
    const response = await fetch(url);
    return  response.json()

}