import React from 'react';
const noImageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

export const AlbumArt = ({path,onClickFunction}) => {
    return(
        <img src={path ? path :  noImageSrc} alt='poster' width={200} onClick={onClickFunction}/>
    )
};