import React , { useState } from 'react';
import {useAppContext} from '../hook';
import {API_KEY} from '../api';

const Image = () => {

    const [isHidden, setIsHidden] = useState(true);
    const {state: {currentTrack}} = useAppContext();
    const isEmpty = () => {
        return Object.keys(currentTrack).length > 0
    };

    const playMusic = () => {
        const audio = document.getElementById('audio');
        audio.play();
        setIsHidden(false)
    };
    return (
        <div className='container '>
            {isEmpty() ?
                <div>
                    <img onClick={playMusic}
                        src={currentTrack.artwork_url} width={290} alt={'art poster'}/>
                    <audio
                    controls={!isHidden}
                        id='audio'
                    src={`${currentTrack.uri}/stream?client_id=${API_KEY}`}
                           preload='auto'
                           itemType={`audio/${currentTrack.original_format}`}>
                        Sound
                    </audio>
                </div>
                :
                <h6>Choose track</h6>}

        </div>
    );
};

export default Image;
