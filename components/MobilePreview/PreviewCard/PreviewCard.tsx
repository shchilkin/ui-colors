import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../pages/_app";

export const PreviewCard: React.FunctionComponent = () => {
    const cardBackground = useSelector<RootState, string>(
        (state) => state.colorManipulation.cardLight
    );
    const accent = useSelector<RootState, string>((state) => state.colorManipulation.accent);
    const accentTint = useSelector<RootState, string>(
        (state) => state.colorManipulation.accentBackgroundLight
    );
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: cardBackground,
                borderRadius: 16,
                padding: 16,
                paddingTop: 16,
                gap: 4,
                marginTop: 8,
            }}
        >
            <Typography variant="h6" style={{ paddingLeft: 4 }}>
                Can Collector
            </Typography>
            <Typography variant="body1" style={{ paddingLeft: 4 }}>
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
