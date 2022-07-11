import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { RootState } from "../../pages/_app";
import { ColorPreviewTile } from "../ColorPreviewTile";

export const ColorPalettePreview: React.FunctionComponent = () => {
    const darkMode = useSelector((state: RootState) => state.systemSettings.previewDarkMode);
    const primary = useSelector((state: RootState) => state.colorManipulation.primary);
    const accent = useSelector((state: RootState) => state.colorManipulation.accent);
    const backgroundColor = useSelector((state: RootState) =>
        darkMode ? state.colorManipulation.backgroundDark : state.colorManipulation.backgroundLight
    );
    const fontColor = useSelector((state: RootState) =>
        darkMode ? state.colorManipulation.textDark : state.colorManipulation.textLight
    );
    // TODO create color preview component
    return (
        <Box sx={{ display: "flex" }}>
            <ColorPreviewTile description="Primary" color={primary} tileType="start" />
            <ColorPreviewTile description="Accent" color={accent} tileType="in-between" />
            <ColorPreviewTile
                description="Background"
                color={backgroundColor}
                tileType="in-between"
            />
            <ColorPreviewTile description="Font" color={fontColor} tileType="end" />
        </Box>
    );
};
