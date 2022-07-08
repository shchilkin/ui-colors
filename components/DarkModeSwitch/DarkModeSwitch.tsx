import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../pages/_app";
import { toggleDarkModeSwitch } from "../../features/systemSettings";

export const DarkModeSwitch: React.FunctionComponent = () => {
    const isDarkMode = useSelector<RootState, boolean>(
        (state) => state.systemSettings.previewDarkMode
    );
    const dispatch = useDispatch();
    const handleChange = () => dispatch(toggleDarkModeSwitch(!isDarkMode));
    return (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>Dark mode preview</Typography>
            <Switch
                checked={isDarkMode}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
        </Box>
    );
};
