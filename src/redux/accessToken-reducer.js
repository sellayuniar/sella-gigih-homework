const initialState = {value: ""};

function accessTokenReducer(state = initialState, action) {
    switch (action.type) {
        case "dataAccessToken":
            return {...state, value: action.playload};
        default:
            return state;
    }

}


export default accessTokenReducer;