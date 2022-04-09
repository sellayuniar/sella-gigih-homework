import {createSlice} from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
    name: "saveAccessToken",
    initialState: {
        value: ""
    },
    reducers: {
        saveAccessToken: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { saveAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;