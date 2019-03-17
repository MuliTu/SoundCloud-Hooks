import React, { useReducer } from 'react';

import './App.scss';
import {Search} from "./Search/Search";
import Image from "./Image/Image";
import History from "./History/History";
import reducer, {initialState} from "./state/reducer";
import Context from './state/context'

const App = () => {
    const [state, dispatch] = useReducer(reducer,initialState);


    return (
        <div className="App">
            <Context.Provider value={{state, dispatch}}>
                <Search/>
                <Image/>
                <History/>
            </Context.Provider>
        </div>
    );
};

export default App;


