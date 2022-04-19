import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./redux/accessTokenSlice";
import tracksSlice from "./redux/tracksSlice";
import userSlice from "./redux/userSlice";

const store = configureStore ({
    reducer:{
    accessToken: accessTokenSlice,
    user: userSlice,
    tracks: tracksSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;