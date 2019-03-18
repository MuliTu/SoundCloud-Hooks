import React , { useState } from 'react';
import {useAppContext} from "../hook";

const Image = () => {
    const [isHidden, setIsHidden] = useState(true);
    const {state: {currentTrack}} = useAppContext();
    const isEmpty = () => {
        return Object.keys(currentTrack).length > 0
    };

    const playMusic = () => {
        var x = document.getElementById('audio');
        x.play();
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
                        id='audio' src={`${currentTrack.uri}/stream?client_id=ggX0UomnLs0VmW7qZnCzw`}
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
