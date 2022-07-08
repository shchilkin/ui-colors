import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PreviewCard } from "./PreviewCard";
import { RootState } from "../../pages/_app";

export const MobilePreview: React.FunctionComponent = () => {
    const mainColor = useSelector<RootState, string>((state) => state.colorManipulation.mainColor);
    const lightText = useSelector<RootState, string>((state) => state.colorManipulation.textLight);
    const lightBackground = useSelector<RootState, string>(
        (state) => state.colorManipulation.backgroundLight
    );
    const darkText = useSelector<RootState, string>((state) => state.colorManipulation.textDark);
    const darkBackground = useSelector<RootState, string>(
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
                backgroundColor: darkMode ? darkBackground : lightBackground,
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    backgroundColor: darkMode ? darkBackground : lightBackground,
                    padding: 2,
                    gap: 2,
                    paddingTop: 3,
                }}
            >
                <Typography style={{ color: mainColor }} variant="h5">
                    Colored Title
                </Typography>
                <Typography
                    style={{ color: darkMode ? darkText : lightText, paddingBottom: 4 }}
                    variant="h5"
                >
                    Uncolored Title
                </Typography>
                <Typography
                    style={{ color: darkMode ? darkText : lightText, paddingBottom: 8 }}
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
