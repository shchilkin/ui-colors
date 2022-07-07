import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HEX } from "../../types";
import { getComplimentaryColor } from "../../utils/getComplimentaryColor";
import { getColorTint } from "../../utils/getColorTint";
import { getColorShade } from "../../utils/getColorShade";

// TODO: Add color manipulation logic (color palette generation)
const colorManipulationSlice = createSlice({
    name: "colorManipulation",
    // TODO Initialize initial state instead of hardcoding values
    initialState: {
        mainColor: "#ed2939",
        accent: "#29EDDD",
        accentBackgroundLight: "#bffaf5",
        accentBackgroundDark: "#15776f",
        backgroundDark: "#180406",
        textDark: "#fdeaeb",
        backgroundLight: "#fdeaeb",
        textLight: "#180406",
        cardDark: "#8e1922",
        cardLight: "#f47f88",
    },
    reducers: {
        // TODO: PayloadAction: add rgb and hls - add  Generics <T>
        // TODO: Fix typing
        changeColor: (state, action: PayloadAction<HEX>) => {
            const accentColor = getComplimentaryColor(action.payload);
            // eslint-disable-next-line no-param-reassign
            state.mainColor = action.payload.value;
            // eslint-disable-next-line no-param-reassign
            state.accent = accentColor.value;
            state.accentBackgroundDark = getColorShade(accentColor, 40).value;
            state.accentBackgroundLight = getColorTint(accentColor, 70).value;
            // TODO: Create function getTint or getShade
            // TODO: Change other colors according to main color
            // colorProcessor({ type: "hex", value: action.payload.value }, {});
            state.backgroundDark = getColorShade(action.payload, 90).value;
            // state.textDark =
            // eslint-disable-next-line no-param-reassign
            // TODO Convert to Hex
            state.backgroundLight = getColorTint(action.payload, 90).value;
            // state.textLight =
            state.cardDark = getColorShade(action.payload, 40).value;
            // eslint-disable-next-line no-param-reassign
            // TODO Convert to Hex
            state.cardLight = getColorTint(action.payload, 40).value;
        },
    },
});

export const { changeColor } = colorManipulationSlice.actions;
export default colorManipulationSlice.reducer;
