import React, {useState, useEffect, useContext} from 'react';
import './style.scss'
import {TracksDispatch} from "../App";
const Row = ({data, index, imageView}) => {
    return (
        <div>
        {
            imageView?
                <div className='track art'>
                    <img  src={data.artwork_url} alt='poster' width={200}/>
                    <div className='track-data'>
                        {index + 1}. {data.title}
                    </div>

                </div>
                :
                <div className='track'>
                    {index + 1}. {data.title}
                </div>
        }
        </div>

    );
};

export default Row;
