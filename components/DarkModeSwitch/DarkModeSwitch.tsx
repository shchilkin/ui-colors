import React from "react";
import { Box, Switch, Typography } from "@mui/material";

export const DarkModeSwitch: React.FunctionComponent = () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => setChecked(!checked);
    return (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>Dark mode preview</Typography>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />
        </Box>
    );
};
