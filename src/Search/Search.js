import React, {useState} from 'react'

import Row from "../Row/Row";
import IconButton from "../smallComponents/IconButton/IconButton";
import Input from "../smallComponents/Input/Input";
import { useAppContext } from "../hook";
import './style.scss'

export const Search = () => {
    const {dispatch, state: {tracksList}} = useAppContext();


    const INDEX_INCREMENT = 6;
    const [index, setIndex] = useState(0);
    const [imageView, setImageView] = useState(false);

    const incrementIndex = () => setIndex((index + INDEX_INCREMENT) > tracksList.length ? 0 : index + INDEX_INCREMENT);

    const myFilter  = (track, trackIndex) => trackIndex >= index && trackIndex < (index + INDEX_INCREMENT);

    const trackEntity = (track, index) => (
        <div key={index} onClick={() => dispatch({type: 'TRACK', payload: track})}>
            <Row index={index} data={track} view={imageView}/>
        </div>
    );

    return (
        <div className='container search'>
            <Input/>
            <div className='search-results'>
                {
                    tracksList.map(trackEntity).filter(myFilter)
                }
            </div>
            <div>
                <IconButton className={'next-button'}
                            onClick={incrementIndex}
                            icon={'fa-chevron-circle-right'}/>

                <IconButton className={'view-buttons'}
                            onClick={() => setImageView(false)}
                            icon={'fa-list-ul'}/>

                <IconButton className={'view-buttons'}
                            onClick={() => setImageView(true)}
                            icon={'fa-table'}/>
            </div>
        </div>
    )
};

