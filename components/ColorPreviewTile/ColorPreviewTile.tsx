import React from "react";
import { Box, Typography } from "@mui/material";
import { ColorType } from "../../types";
import { toHex } from "../../utils";
import { getFontColor } from "../../utils/getFontColor";

interface ColorPreviewTileProps {
    color: ColorType;
    description: string;
    tileType: "start" | "end" | "in-between";
}

export const ColorPreviewTile: React.FunctionComponent<ColorPreviewTileProps> = ({
    color,
    description,
    tileType,
}) => {
    const hexValue = toHex(color).value;
    // const rgbValues =
    //     color.type === "rgb"
    //         ? `${color.value.red}, ${color.value.green}, ${color.value.blue}`
    //         : `${toRGB(color).value.red}, ${toRGB(color).value.green}, ${toRGB(color).value.blue}`;
    // TODO: copy color code to clipboard on click
    return (
        <Box
            sx={{
                backgroundColor: hexValue,
                color: toHex(getFontColor(color)).value,
                width: 100,
                height: 100,
                borderTopLeftRadius: tileType === "start" ? 6 : 0,
                borderBottomLeftRadius: tileType === "start" ? 6 : 0,
                borderTopRightRadius: tileType === "end" ? 6 : 0,
                borderBottomRightRadius: tileType === "end" ? 6 : 0,
                padding: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                {description}
            </Typography>
            <Box>
                <Typography variant="subtitle1">{hexValue}</Typography>
                {/* <Typography variant="body1">{rgbValues}</Typography> */}
            </Box>
        </Box>
    );
};
