import { createSlice } from "@reduxjs/toolkit";

// TODO: Add color manipulation logic (color palette generation)
const colorManipulationSlice = createSlice({
    name: "colorManipulation",
    initialState: { mainColor: "#ed2939" },
    reducers: {
        changeColor(state, action) {
            // eslint-disable-next-line no-param-reassign
            state.mainColor = action.payload;
        },
    },
});

export const { changeColor } = colorManipulationSlice.actions;
export default colorManipulationSlice.reducer;
