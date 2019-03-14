export async function getTracks(query) {
    const url = `http://api.soundcloud.com/tracks.json?client_id=ggX0UomnLs0VmW7qZnCzw&q=${query}&limit=50`;
    const response = await fetch(url);
    return  response.json()

}