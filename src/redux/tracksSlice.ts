import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MergedTracks } from "../spotify";

export const tracksSlice = createSlice({
    name: "tracks",
    initialState: {
        selectedTracks: [] as string[],
        mergedTracks: [] as MergedTracks[],
    },
    reducers: {
        setSelectedTracks: (state, action: PayloadAction<string>) => {
            state.selectedTracks = [...state.selectedTracks, action.payload];
        },
        removeSelectedTracks: (state, action: PayloadAction<string>) => {
            state.selectedTracks = state.selectedTracks.filter(
                (track) => track !== action.payload
            );
        },
        setMergedTracks: (state, action) => {
            state.mergedTracks = action.payload;
        }
    }
})

export const { setSelectedTracks, removeSelectedTracks, setMergedTracks } = tracksSlice.actions;

export default tracksSlice.reducer;