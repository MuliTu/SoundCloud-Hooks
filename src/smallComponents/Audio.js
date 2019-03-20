import {API_KEY} from "../api";
import React from "react";

export const Audio = ({path, type, isHidden}) => {
    return (
        <audio
            controls={!isHidden}
            id='audio'
            src={`${path}?client_id=${API_KEY}`}
            preload='auto'
            itemType={`audio/${type}`}/>
    )
};