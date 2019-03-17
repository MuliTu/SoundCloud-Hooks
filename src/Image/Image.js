import React from 'react';
import ReactPlayer from 'react-player'
import {useAppContext} from "../hook";

const Image = () => {
    const { state:{currentTrack} }= useAppContext();
    return (
        <div className='container'>
            <ReactPlayer
                url={currentTrack.uri}
                volume={1.000}
                controls={true}
                width={'100%'}
                height={'100%'}
                />
        </div>
    );
};

export default Image;
