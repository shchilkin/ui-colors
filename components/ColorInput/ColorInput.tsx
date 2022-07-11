import React from "react";
import { InputBase, Paper, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../../features/colorManipulation";
import { RootState } from "../../pages/_app";
import { isValidHexColor, toHex } from "../../utils";
import { ColorType } from "../../types";

// TODO: Different color modes - RGB, HSL, HSB, Hex, HTML Color Names
// TODO: Update input value if main color changes
export const ColorInput: React.FunctionComponent = () => {
    const primary = useSelector<RootState, ColorType>((state) => state.colorManipulation.primary);
    const [colorValue, setColorValue] = React.useState<string>(toHex(primary).value);
    const dispatch = useDispatch();
    React.useEffect(() => {
        setColorValue(toHex(primary).value);
    }, [primary]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validColor = isValidHexColor({ type: "hex", value: event.target.value });
        // TODO add color type check
        if (validColor) {
            dispatch(changeColor({ type: "hex", value: event.target.value }));
            window.history.replaceState("", "", `/${event.target.value}`);
        }
        setColorValue(event.target.value);
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box>
                <Typography>Enter color code:</Typography>
            </Box>
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
