import React, {useState, useEffect} from 'react';
import IconButton from '../IconButton/IconButton';
import {useAppContext} from '../../hook';
import './style.scss'


const Input = ({onClickFetchData}) => {
    const {dispatch, state: {query}} = useAppContext();
    const [myQuery, setQuery] = useState('');
    const queryChangeHandler = (e) => setQuery(e.target.value);
    const addToRecentSearches = (query) => dispatch({type: 'ADD_TO_RECENT_SEARCHERS', payload: query});

    useEffect(() => {
        if (query !== myQuery) {
            setQuery(query);
            onClickFetchData(query)
        }
    }, [query]);

    return (
        <div className='input-wrapper'>
            <input value={myQuery}
                   placeholder={'Search...'}
                   onChange={queryChangeHandler}/>
            <IconButton onClick={() => onClickFetchData(myQuery).then(addToRecentSearches(myQuery))}
                        icon={'fa-search'}/>
        </div>
    );
};

export default Input;
