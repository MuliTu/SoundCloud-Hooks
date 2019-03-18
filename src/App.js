import React, {useReducer} from 'react';
import {Search} from "./Search/Search";
import Image from "./Image/Image";
import RecentSearches from "./RecentSearches/RecentSearches";
import reducer, {initialState} from "./state/reducer";
import Context from './state/context'
import './App.scss';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="App">
            <Context.Provider value={{state, dispatch}}>
                <Search/>
                <Image/>
                <RecentSearches/>
            </Context.Provider>
        </div>
    );
};

export default App;


