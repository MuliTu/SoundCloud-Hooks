console.log('thuis is fromm reducer',localStorage.getItem('view') === 'true');

export const initialState = {
    viewMode:Boolean(localStorage.getItem('view') === 'true'),
    history:[],
    query:'',
    currentTrack: {},
    tracksList:[]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'TRACK':
            return {...state, currentTrack:action.payload};

        case 'UPDATE_LIST':
            return {...state, tracksList: action.payload};

        case 'UPDATE_QUERY':
        return {...state, query: action.payload,history:[action.payload,...state.history]};

        case 'HISTORY_GOT_CLICKED':
        return {...state, query:action.payload};

        case 'CHANGE_VIEW_MODE':
            localStorage.setItem('view', action.payload);
        return {...state, viewMode:action.payload};
        default:
            return state;


    }

};

export default reducer;