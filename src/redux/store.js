import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./accessToken-reducer";

export default configureStore ({
    reducer: {
        dataAccessToken: accessTokenReducer
    }
});