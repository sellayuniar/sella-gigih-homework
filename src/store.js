import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./redux/accessTokenReducer";

export default configureStore ({
    reducer: {
        dataAccessToken: accessTokenReducer
    }
});