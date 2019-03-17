import React from 'react';
import {useAppContext} from "../hook";

const History = () => {
    const { dispatch ,state:{history}} = useAppContext();
    return (
        <div className='container'>
            Recent searches

            {history.map(recentSearches =>
                <div onClick={()=>dispatch({type:'HISTORY_GOT_CLICKED',payload:recentSearches})}>{recentSearches}</div>
            ).slice(0,5)}
        </div>
    );
};

export default History;
