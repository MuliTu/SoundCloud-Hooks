import React, {useState, useEffect} from 'react'
import Input from '../Input/Input';
import {useAppContext} from '../../hook';
import {getTracks, incrementIndex} from './utilis';
import './style.scss'
import {SearchResults} from '../SearchResults';
import {ButtonGroup} from '../ButtonGroup';
import {Div} from '../Div';

export const Search = () => {
    const {dispatch, state: {tracksList, viewMode}} = useAppContext();
    const [index, setIndex] = useState(0);

    async function fetchDataFromAPI(query) {
        dispatch({type: 'UPDATE_QUERY', payload: query});
        dispatch({type: 'UPDATE_LIST', payload: await getTracks(query)})
    }

    useEffect(() => {
    }, [tracksList]);

    const onClickNext = () => setIndex(incrementIndex(index, tracksList));

    return (
        <Div optionalClassName={'search'}>
            <Input onClickFetchData={fetchDataFromAPI}/>
            <SearchResults data={tracksList} view={viewMode} index={index}/>
            <ButtonGroup onClickNext={onClickNext} dispatch={dispatch}/>
        </Div>
    )
};

