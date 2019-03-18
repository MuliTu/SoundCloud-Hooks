import {
    ADD_TO_RECENT_SEARCHERS,
    CHANGE_VIEW_MODE,
    HISTORY_GOT_CLICKED,
    TRACK,
    UPDATE_LIST,
    UPDATE_QUERY
} from "./types";

export const initialState = {
    viewMode: Boolean(localStorage.getItem('view') === 'true'),
    history: [],
    query: '',
    currentTrack: {},
    tracksList: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case TRACK:
            const index = state.tracksList.indexOf(action.payload);
            const newTrackList = [...state.tracksList.slice(0,index),...state.tracksList.slice(index +1 , state.tracksList.length)];
            if(state.currentTrack){
                return {...state,
                    tracksList: [...newTrackList, state.currentTrack],
                    currentTrack: action.payload};
            }
            return {...state, tracksList: newTrackList, currentTrack: action.payload};

        case UPDATE_LIST:
            return {...state, tracksList: action.payload};

        case UPDATE_QUERY:
            return {...state, query: action.payload};

        case ADD_TO_RECENT_SEARCHERS:
            return {...state, query: action.payload, history: [action.payload, ...state.history]};

        case HISTORY_GOT_CLICKED:
            return {...state, query: action.payload};

        case CHANGE_VIEW_MODE:
            localStorage.setItem('view', action.payload);
            return {...state, viewMode: action.payload};

        default:
            return state;


    }

};

export default reducer;