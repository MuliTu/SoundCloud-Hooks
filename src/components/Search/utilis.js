import {API_KEY} from '../../api';

const INDEX_INCREMENT = 6;

export async function getTracks(query) {
    const url = `http://api.soundcloud.com/tracks.json?client_id=${API_KEY}&q=${query}&limit=50`;
    const response = await fetch(url);
    return response.json()

}

export const indexLimitation = (index, size) => {
    return (index + INDEX_INCREMENT) > size ? size % (index + INDEX_INCREMENT) : (index + INDEX_INCREMENT)
};

export const incrementIndex = (index, tracksList) => {
    return (index + INDEX_INCREMENT) >= tracksList.length ? 0 : index + INDEX_INCREMENT
};