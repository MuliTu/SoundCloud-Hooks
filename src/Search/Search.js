import React, { useState } from 'react'

import Track from '../smallComponents/Track/Track';
import IconButton from '../smallComponents/IconButton/IconButton';
import Input from '../smallComponents/Input/Input';
import {useAppContext} from '../hook';
import './style.scss'

export const Search = () => {
    const {dispatch, state: {tracksList, viewMode}} = useAppContext();
    const INDEX_INCREMENT = 6;
    const [index, setIndex] = useState(0);


    const incrementIndex = () => setIndex((index + INDEX_INCREMENT) > tracksList.length ? 0 : index + INDEX_INCREMENT);

    const myFilter = (track, trackIndex) => trackIndex >= index && trackIndex < (index + INDEX_INCREMENT);

    const searchResult = (track, index) => (
        <div key={index}>
            <Track index={index} data={track} view={viewMode}/>
        </div>
    );


    return (
        <div className='container search'>
            <Input/>
            <div className='search-results'>
                {
                    tracksList.map(searchResult).filter(myFilter)
                }
            </div>
            <div>
                <IconButton className={'next-button'}
                            onClick={incrementIndex}
                            icon={'fa-chevron-circle-right'}/>

                <IconButton className={'view-buttons'}
                            onClick={() => dispatch({type: 'CHANGE_VIEW_MODE', payload: false})}
                            icon={'fa-list-ul'}/>

                <IconButton className={'view-buttons'}
                            onClick={() => dispatch({type: 'CHANGE_VIEW_MODE', payload: true})}
                            icon={'fa-table'}/>
            </div>
        </div>
    )
};

