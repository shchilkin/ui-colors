import React from "react";
import { Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../pages/_app";

export const PreviewCard: React.FunctionComponent = () => {
    const cardBackground = useSelector<RootState, string>(
        (state) => state.colorManipulation.cardLight
    );
    const accent = useSelector<RootState, string>((state) => state.colorManipulation.accent);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: cardBackground,
                borderRadius: 12,
                padding: 16,
                paddingTop: 16,
                gap: 4,
                marginTop: 8,
            }}
        >
            <Typography variant="h6">Card title</Typography>
            <Typography variant="subtitle1">Card subtitle</Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Chip label="Chip Content" sx={{ bgcolor: accent }} />
        </div>
    );
};
