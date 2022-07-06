import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PreviewCard } from "./PreviewCard";
import { RootState } from "../../pages/_app";

// TODO: Add more typography styles (Bold, light)

export const MobilePreview: React.FunctionComponent = () => {
    const mainColor = useSelector<RootState, string>((state) => state.colorManipulation.mainColor);
    const lightText = useSelector<RootState, string>((state) => state.colorManipulation.textLight);
    const lightBackground = useSelector<RootState, string>(
        (state) => state.colorManipulation.backgroundLight
    );
    return (
        <div
            style={{
                display: "flex",
                border: "12px solid rgba(0,0,0,0.1)",
                borderRadius: 40,
                maxWidth: 390 / 1.25,
                maxHeight: 844 / 1.25,
                backgroundColor: lightBackground,
                overflow: "hidden",
            }}
        >
            <Box sx={{ backgroundColor: lightBackground, padding: 2, gap: 2, paddingTop: 3 }}>
                <Typography style={{ color: mainColor }} variant="h5">
                    Colored Title
                </Typography>
                <Typography style={{ color: lightText }} variant="h5">
                    Uncolored Title
                </Typography>
                <Typography variant="subtitle1">subtitle</Typography>
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
            </Box>
        </div>
    );
};
