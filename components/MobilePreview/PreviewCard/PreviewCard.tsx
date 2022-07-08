import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../pages/_app";

export const PreviewCard: React.FunctionComponent = () => {
    const cardBackgroundLight = useSelector<RootState, string>(
        (state) => state.colorManipulation.cardLight
    );
    const cardBackgroundDark = useSelector<RootState, string>(
        (state) => state.colorManipulation.cardDark
    );
    const textLight = useSelector<RootState, string>((state) => state.colorManipulation.textLight);
    const textDark = useSelector<RootState, string>((state) => state.colorManipulation.textDark);
    const accent = useSelector<RootState, string>((state) => state.colorManipulation.accent);
    const accentTint = useSelector<RootState, string>(
        (state) => state.colorManipulation.accentBackgroundLight
    );
    const darkMode = useSelector<RootState, boolean>(
        (state) => state.systemSettings.previewDarkMode
    );
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: darkMode ? cardBackgroundDark : cardBackgroundLight,
                borderRadius: 16,
                padding: 16,
                paddingTop: 16,
                gap: 4,
                marginTop: 8,
            }}
        >
            <Typography
                variant="h6"
                style={{ color: darkMode ? textDark : textLight, paddingLeft: 4 }}
            >
                Can Collector
            </Typography>
            <Typography
                variant="body1"
                style={{ color: darkMode ? textDark : textLight, paddingLeft: 4 }}
            >
                As a can collector you need to ensure that work areas are kept clean, neat and
                well-organized.
            </Typography>
            <Box>
                <Chip
                    label="Public"
                    sx={{ color: accent, backgroundColor: accentTint, maxWidth: 64, height: 24 }}
                />
            </Box>
        </div>
    );
};
