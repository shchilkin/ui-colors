import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../pages/_app";
import { ColorType } from "../../../types";
import { toHex } from "../../../utils";

export const PreviewCard: React.FunctionComponent = () => {
    const cardBackgroundLight = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.cardLight
    );
    const cardBackgroundDark = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.cardDark
    );
    const textLight = useSelector<RootState, ColorType>(
        (state) => state.colorManipulation.textLight
    );
    const textDark = useSelector<RootState, ColorType>((state) => state.colorManipulation.textDark);
    const accent = useSelector<RootState, ColorType>((state) => state.colorManipulation.accent);
    const accentTint = useSelector<RootState, ColorType>(
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
                backgroundColor: darkMode
                    ? toHex(cardBackgroundDark).value
                    : toHex(cardBackgroundLight).value,
                borderRadius: 16,
                padding: 16,
                paddingTop: 16,
                gap: 4,
                marginTop: 8,
            }}
        >
            <Typography
                variant="h6"
                style={{
                    color: darkMode ? toHex(textDark).value : toHex(textLight).value,
                    paddingLeft: 4,
                }}
            >
                Can Collector
            </Typography>
            <Typography
                variant="body1"
                style={{
                    color: darkMode ? toHex(textDark).value : toHex(textLight).value,
                    paddingLeft: 4,
                }}
            >
                As a can collector you need to ensure that work areas are kept clean, neat and
                well-organized.
            </Typography>
            <Box>
                <Chip
                    label="Public"
                    sx={{
                        color: toHex(accent).value,
                        backgroundColor: toHex(accentTint).value,
                        maxWidth: 64,
                        height: 24,
                    }}
                />
            </Box>
        </div>
    );
};
