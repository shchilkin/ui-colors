import React from "react";
import { InputBase, Paper, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../features/colorManipulation";
import { RootState } from "../../pages/_app";

// TODO: Add logic
// TODO: Color validation
// TODO: Different color modes - RGB, HSL, HSB, Hex, HTML Color Names
export const ColorInput: React.FunctionComponent = () => {
    const mainColor = useSelector<RootState, string>((state) => state.colorManipulation.mainColor);
    // const dispatch = useDispatch();
    return (
        <Box>
            <Typography>Enter color code:</Typography>
            <Typography>Main color from global store: {mainColor}</Typography>
            <Paper
                variant="outlined"
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
            >
                <InputBase placeholder="#f0f0f0" />
            </Paper>
        </Box>
    );
};
