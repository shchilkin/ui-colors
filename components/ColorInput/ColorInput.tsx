import React from "react";
import { InputBase, Paper, Typography, Box } from "@mui/material";

// TODO: Add logic
// TODO: Color validation
// TODO: Different color modes - RGB, HSL, HSB, Hex, HTML Color Names
export const ColorInput: React.FunctionComponent = () => (
    <Box>
        <Typography>Enter color code:</Typography>
        <Paper
            variant="outlined"
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        >
            <InputBase placeholder="#FFF" />
        </Paper>
    </Box>
);
