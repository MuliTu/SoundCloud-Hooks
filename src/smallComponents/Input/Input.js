import React, {useState, useEffect} from 'react';
import IconButton from "../IconButton/IconButton";
import {getTracks} from "../../functions";
import './style.scss'

const Input = ({resultHandler}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    async function fetchDataFromAPI(query) {
        setResults(await getTracks(query))
    }

    useEffect(() => {
        resultHandler(results)
    });

    return (
        <div className='input-wrapper'>
            <input className='input' placeholder={'Search...'} onChange={(e) => setQuery(e.target.value)}/>
            <IconButton onClick={() => fetchDataFromAPI(query)} icon={'fa-search'}/>
        </div>
    );
};

export default Input;
