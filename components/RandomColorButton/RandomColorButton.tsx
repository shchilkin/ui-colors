import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeColor } from "../../features/colorManipulation";
import { RGB } from "../../types";
import { getRandomNumber, toHex } from "../../utils";

export const RandomColorButton: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const randomRGB: RGB = {
        type: "rgb",
        value: {
            red: getRandomNumber(),
            green: getRandomNumber(),
            blue: getRandomNumber(),
        },
    };
    const handleClick = () => {
        // TODO: Use same function as Color input
        dispatch(changeColor(toHex(randomRGB)));
        window.history.replaceState("", "", `${toHex(randomRGB).value}`);
    };
    return (
        <Button variant="text" onClick={handleClick}>
            generate random color
        </Button>
    );
};
