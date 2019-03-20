import React from 'react';
import {useAppContext} from '../hook';
import {Div} from "../Div";

const RecentSearches = () => {
    const {dispatch, state: {history}} = useAppContext();

    const recentSearchesEntity = (recentSearches, index) => (
        <div key={index}
             onClick={() => dispatch({type: 'HISTORY_GOT_CLICKED', payload: recentSearches})}
             className='track'>
            {recentSearches}
        </div>
    );

    return (
        <Div>
            <h3>Recent Searches</h3>
            <hr/>
            {history.slice(0, 5).map(recentSearchesEntity)}
        </Div>
    );
};

export default RecentSearches;
