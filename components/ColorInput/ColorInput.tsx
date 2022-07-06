import React from "react";
import { InputBase, Paper, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../features/colorManipulation";
import { RootState } from "../../pages/_app";
import { isValidHexColor } from "../../utils/isValidHexColor";

// TODO: Different color modes - RGB, HSL, HSB, Hex, HTML Color Names
export const ColorInput: React.FunctionComponent = () => {
    const mainColor = useSelector<RootState, string>((state) => state.colorManipulation.mainColor);
    const [colorValue, setColorValue] = React.useState<string>(mainColor);
    const dispatch = useDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validColor = isValidHexColor(event.target.value);
        // TODO add color type check
        if (validColor) {
            dispatch(changeColor({ type: "hex", value: event.target.value }));
        }
        setColorValue(event.target.value);
    };
    return (
        <Box>
            <Typography>Enter color code:</Typography>
            <Typography>Main color from global store: {mainColor}</Typography>
            <Paper
                variant="outlined"
                component="div"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
            >
                <InputBase placeholder="#f0f0f0" value={colorValue} onInput={handleChange} />
            </Paper>
        </Box>
    );
};
