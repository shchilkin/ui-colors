import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorType } from "../../types";
import { getComplimentaryColor, getColorTint, getColorShade, toHex } from "../../utils";

interface ColorManipulationState {
    primary: ColorType;
    accent: ColorType;
    accentBackgroundLight: ColorType;
    accentBackgroundDark: ColorType;
    backgroundDark: ColorType;
    textDark: ColorType;
    backgroundLight: ColorType;
    textLight: ColorType;
    cardDark: ColorType;
    cardLight: ColorType;
}

const initialState = {
    primary: { type: "hex", value: "#ed2939" },
    accent: { type: "hex", value: "#29EDDD" },
    accentBackgroundLight: { type: "hex", value: "#bffaf5" },
    accentBackgroundDark: { type: "hex", value: "#15776f" },
    backgroundDark: { type: "hex", value: "#180406" },
    textLight: { type: "hex", value: "#180406" },
    backgroundLight: { type: "hex", value: "#fdeaeb" },
    textDark: { type: "hex", value: "#fdeaeb" },
    cardDark: { type: "hex", value: "#8e1922" },
    cardLight: { type: "hex", value: "#f47f88" },
} as ColorManipulationState;

// TODO: Add color manipulation logic (color palette generation)
const colorManipulationSlice = createSlice({
    name: "colorManipulation",
    // TODO Initialize initial state instead of hard coding values
    initialState,
    reducers: {
        changeColor: (state, action: PayloadAction<ColorType>) => {
            const accentColor = getComplimentaryColor(action.payload);
            state.primary = action.payload;
            state.accent = toHex(accentColor);
            state.accentBackgroundDark = toHex(getColorShade(accentColor, 40));
            state.accentBackgroundLight = toHex(getColorTint(accentColor, 70));
            state.backgroundDark = toHex(getColorShade(action.payload, 90));
            state.textDark = toHex(getColorTint(action.payload, 90));
            state.backgroundLight = toHex(getColorTint(action.payload, 90));
            state.textLight = toHex(getColorShade(action.payload, 90));
            state.cardDark = toHex(getColorShade(action.payload, 40));
            state.cardLight = toHex(getColorTint(action.payload, 40));
        },
    },
});

export const { changeColor } = colorManipulationSlice.actions;
export default colorManipulationSlice.reducer;
