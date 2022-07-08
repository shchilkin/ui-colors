import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const systemSettingsSlice = createSlice({
    name: "systemSettings",
    initialState: { previewDarkMode: false },
    reducers: {
        toggleDarkModeSwitch: (state, action: PayloadAction<boolean>) => {
            state.previewDarkMode = action.payload;
        },
    },
});

export const { toggleDarkModeSwitch } = systemSettingsSlice.actions;
export default systemSettingsSlice.reducer;
