import React, {useState} from 'react';
import {useAppContext} from '../hook';
import {isEmpty, playMusic} from "./utilis";
import {AlbumArt} from "../smallComponents/AlbomArt";
import {Audio} from "../smallComponents/Audio";
import {Div} from "../Div";

const Image = () => {
    const [isHidden, setIsHidden] = useState(true);
    const {state: {currentTrack}} = useAppContext();

    return (
        <Div>
            {
                isEmpty(currentTrack)
                    ?
                    <div>
                        <AlbumArt
                            path={currentTrack.artwork_url}
                            onClickFunction={() => {
                                playMusic();
                                setIsHidden(false)
                            }}/>
                        <Audio path={currentTrack.stream_url}
                               isHidden={isHidden}
                               type={currentTrack.original_format}/>
                    </div>
                    :
                    <h6>Choose track</h6>
            }
        </Div>
    );
};

export default Image;
