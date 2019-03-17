import React from 'react';
import './style.scss'
import {useAppContext} from "../hook";
const Row = ({data, index, view}) => {
    return (
        <div>
        {
            view?
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
