import React, {useState, useEffect} from 'react';
import IconButton from "../IconButton/IconButton";
import {getTracks} from "../../functions";
import {useAppContext} from "../../hook";
import './style.scss'


const Input = () => {
    const {dispatch, state: {query}} = useAppContext();
    const [myQuery, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const queryChangeHandler = (e) => setQuery(e.target.value);

    useEffect(() => {
        if (query !== myQuery) {
            setQuery(query);
            fetchDataFromAPI(query).finally()
        }
        dispatch({type: 'UPDATE_LIST', payload: results})
    }, [query, results]);

    async function fetchDataFromAPI(query) {
        dispatch({type: 'UPDATE_QUERY', payload: query});
        setResults(await getTracks(query));
    }

    const addToRecentSearches = (query) => dispatch({type: 'ADD_TO_RECENT_SEARCHERS', payload: query});


    return (
        <div className='input-wrapper'>
            <input className='input'
                   value={myQuery}
                   placeholder={'Search...'}
                   onChange={queryChangeHandler}/>
            <IconButton onClick={() => fetchDataFromAPI(myQuery).then(addToRecentSearches(myQuery))} icon={'fa-search'}/>
        </div>
    );
};

export default Input;
