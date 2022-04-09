import { configureStore } from "@reduxjs/toolkit";
// import accessTokenReducer from "./redux/accessTokenReducer";
import accessTokenSlice from "./redux/accessTokenSlice";

export default configureStore ({
    reducer:{
    accessToken: accessTokenSlice
    }
});