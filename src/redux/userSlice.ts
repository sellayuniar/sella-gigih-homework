import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "display_name",
        userID: undefined || "" as string,
    },
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setUserDisplayName: (state, action) => {
            state.displayName = action.payload;
        }
    }
})

export const { setUserID, setUserDisplayName } = userSlice.actions;

export default userSlice.reducer;