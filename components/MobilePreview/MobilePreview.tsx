import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PreviewCard } from "./PreviewCard";
import { RootState } from "../../pages/_app";
import { ColorType } from "../../types";
import { toHex } from "../../utils";

export const MobilePreview: React.FunctionComponent = () => {
    const primary = useSelector<RootState, ColorType>((state) => state.colorManipulation.primary);
    const lightText = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.textLight
    );
    const lightBackground = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.backgroundLight
    );
    const darkText = useSelector<RootState, ColorType>((state) => state.colorManipulation.textDark);
    const darkBackground = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.backgroundDark
    );
    const darkMode = useSelector<RootState, boolean>(
        (state) => state.systemSettings.previewDarkMode
    );
    return (
        <div
            style={{
                display: "flex",
                border: `12px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}`,
                borderRadius: 40,
                maxWidth: 390 / 1.25,
                maxHeight: 844 / 1.25,
                backgroundColor: darkMode
                    ? toHex(darkBackground).value
                    : toHex(lightBackground).value,
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    backgroundColor: darkMode
                        ? toHex(darkBackground).value
                        : toHex(lightBackground).value,
                    padding: 2,
                    gap: 2,
                    paddingTop: 3,
                }}
            >
                <Typography style={{ color: toHex(primary).value }} variant="h5">
                    Colored Title
                </Typography>
                <Typography
                    style={{
                        color: darkMode ? toHex(darkText).value : toHex(lightText).value,
                        paddingBottom: 4,
                    }}
                    variant="h5"
                >
                    Uncolored Title
                </Typography>
                <Typography
                    style={{
                        color: darkMode ? toHex(darkText).value : toHex(lightText).value,
                        paddingBottom: 8,
                    }}
                    variant="subtitle1"
                >
                    18 gigs available
                </Typography>
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
            </Box>
        </div>
    );
};
