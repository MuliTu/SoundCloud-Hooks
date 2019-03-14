import React, {useReducer, useEffect} from 'react';
import './App.scss';
import {Search} from "./Search/Search";
import Image from "./Image/Image";
import History from "./History/History";

export const TracksDispatch = React.createContext(null);

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        history: [],
        currentTrack: {}
    });

    useEffect(() => {
    console.log('updated',state);
    },[state]);

    return (
        <div className="App">
            <TracksDispatch.Provider value={dispatch}>
                <Search/>
                <Image data={state.currentTrack}/>
                <History data={state.history}/>
            </TracksDispatch.Provider>
        </div>
    );
};

export default App;


function reducer(state, action) {
    switch (action.type) {
        case 'ADD_RECENT_SEARCH':
            state.history = [action.payload,...state.history];
            return {...state, action};
        case 'TRACK':
            state.currentTrack = action.payload;
            return {...state, action};

        default:
            console.log('this is state', state);
            return state;


    }

}