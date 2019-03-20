export const isEmpty = (obj) => {
    return Object.keys(obj).length > 0
};

export const playMusic = () => {
    const audio = document.getElementById('audio');
    audio.play();
};