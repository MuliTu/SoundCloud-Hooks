import React from 'react';
import { useAppContext } from "../hook";

const RecentSearches = () => {
    const {dispatch, state: {history}} = useAppContext();

    const recentSearchesEntity = (recentSearches, index) => (
        <div key={index} onClick={() => dispatch({type: 'HISTORY_GOT_CLICKED', payload: recentSearches})}
             className='track'
        >{recentSearches}
        </div>
    );
    return (
        <div className='container'>
            <h3>Recent Searches</h3>
            <hr/>
            {history.map(recentSearchesEntity).slice(0, 5)}
        </div>
    );
};

export default RecentSearches;
