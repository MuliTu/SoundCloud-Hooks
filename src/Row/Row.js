import React, { useState } from 'react';
import './style.scss'
import { useAppContext } from '../hook';

const Row = ({data, index, view}) => {
    const { dispatch } = useAppContext();
    const [isAnimetd, setIsAnimated] = useState(false);
    const afterAnimation = () => {
        setIsAnimated(false);
        dispatch({type: 'TRACK', payload: data})
    };

    return (
        view ?
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
                className={`track ${isAnimetd ? 'fly' : ''}`}
                onAnimationEnd={() => afterAnimation()}>
                {index + 1}. {data.title}
            </div>

    );
};

export default Row;
