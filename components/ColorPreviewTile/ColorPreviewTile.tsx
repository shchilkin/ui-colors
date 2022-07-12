import React from "react";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { ColorType } from "../../types";
import { toHex } from "../../utils";
import { getFontColor } from "../../utils/getFontColor";
import { getLuminance } from "../../utils/getLuminance";

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
    const { enqueueSnackbar } = useSnackbar();
    const [isShown, setIsShown] = React.useState(false);
    const hexValue = toHex(color).value;
    // TODO: copy color code to clipboard on click
    const handleOnClick = () => {
        if (typeof window !== "undefined") {
            window.navigator.clipboard.writeText(hexValue).then(() => {
                // TODO: Add snackbar instead of alert
                enqueueSnackbar(`Color ${hexValue} is copied to your clickboard`, {
                    variant: "success",
                    autoHideDuration: 3000,
                });
            });
        }
    };
    return (
        <div style={{ position: "relative" }}>
            {isShown && (
                <Box
                    onMouseLeave={() => setIsShown(false)}
                    onClick={handleOnClick}
                    sx={{
                        backgroundColor:
                            getLuminance(color) > 0.5 ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        borderTopLeftRadius: tileType === "start" ? 6 : 0,
                        borderBottomLeftRadius: tileType === "start" ? 6 : 0,
                        borderTopRightRadius: tileType === "end" ? 6 : 0,
                        borderBottomRightRadius: tileType === "end" ? 6 : 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2,
                    }}
                >
                    <Typography variant="subtitle2">Copy</Typography>
                </Box>
            )}
            <Box
                onMouseEnter={() => setIsShown(true)}
                sx={{
                    backgroundColor: hexValue,
                    color: toHex(getFontColor(color)).value,
                    position: "relative",
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
                    cursor: "pointer",
                }}
            >
                <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                    {description}
                </Typography>
                <Box>
                    <Typography variant="subtitle1">{hexValue}</Typography>
                </Box>
            </Box>
        </div>
    );
};
