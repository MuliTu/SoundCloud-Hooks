import React, {useState} from 'react'
import './style.scss'
import Row from "../Tracks/Row";
import IconButton from "../smallComponents/IconButton/IconButton";
import Input from "../smallComponents/Input/Input";

export const Search = () => {
    const INDEX_INCREMENT = 6;
    const [index, setIndex] = useState(0);
    const [imageView, setImageView] = useState(false);
    const [tracks, setTracks] = useState([]);

    const incrementIndex = () => setIndex((index + INDEX_INCREMENT) % tracks.length);

    const setResultHandler = (tracks) => setTracks(tracks);

    const trackEntity = (x, index) => (
        <div key={index}>
            <Row index={index} data={x} imageView={imageView}/>
        </div>
    );

    return (
        <div className='container search'>
            <Input resultHandler={setResultHandler}/>
            <div className='search-results'>
                {
                    tracks.map(trackEntity).slice(index, index + INDEX_INCREMENT % tracks.length)
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