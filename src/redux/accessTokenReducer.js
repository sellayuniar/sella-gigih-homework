const initialState = {value: ""};

const accessTokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "dataAccessToken":
            return { value: action.playload};
        default:
            return state;
    }

}

export default accessTokenReducer;