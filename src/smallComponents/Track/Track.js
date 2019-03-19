import React, {useState} from 'react';
import './style.scss'
import {useAppContext} from '../../hook';

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
                className={`${isAnimetd ? 'art fly' : 'art'}`}
                onAnimationEnd={() => afterAnimation()}>
                <img src={data.artwork_url}
                     alt='poster'
                     width={200}
                />
            </div>
            :
            <div
                onClick={() => setIsAnimated(true)}
                className={` ${isAnimetd ? 'track fly' : 'track'}`}
                onAnimationEnd={() => afterAnimation()}>
                {index + 1}. {data.title}
            </div>

    );
};

export default Track;
