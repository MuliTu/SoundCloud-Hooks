const INDEX_INCREMENT = 6;

export const getOnly = (track, trackIndex, index) => {
    return trackIndex >= index && trackIndex < (index + INDEX_INCREMENT)
};

export const incrementIndex = (index, tracksList) => {
    return (index + INDEX_INCREMENT) > tracksList.length ? 0 : index + INDEX_INCREMENT
};