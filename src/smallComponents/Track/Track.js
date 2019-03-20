import React, {useState} from 'react';
import {useAppContext} from '../../hook';
import {AlbumArt} from "../AlbomArt";
import './style.scss'

const Track = ({data, index}) => {
    const {dispatch, state: {viewMode}} = useAppContext();
    const [isAnimetd, setIsAnimated] = useState(false);
    function afterAnimation() {
        setIsAnimated(false);
        dispatch({type: 'TRACK', payload: data})
    }

    return (
        viewMode ?
            <div
                onClick={() => setIsAnimated(true)}
                className={`art ${isAnimetd ? 'fly' : ''}`}
                onAnimationEnd={() => afterAnimation()}>
                <AlbumArt path={data.artwork_url}/>
            </div>
            :
            <div
                onClick={() => setIsAnimated(true)}
                className={`track ${isAnimetd ? 'fly' : ''}`}
                onAnimationEnd={() => afterAnimation()}>
                {index + 1}. {data.title}
            </div>

    );
};

export default Track;
