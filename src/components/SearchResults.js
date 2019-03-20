import React from 'react';
import Track from './Track/Track';
import {indexLimitation} from './Search/utilis';

export const SearchResults = ({data, view, index}) => {
    return (
        <div className='search-results'>
            {
                data.map((track, index) => (
                    <div key={index}>
                        <Track index={index} data={track} view={view}/>
                    </div>
                )).slice(index, indexLimitation(index, data.length))
            }
        </div>
    )
};