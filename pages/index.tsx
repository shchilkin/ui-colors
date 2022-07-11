import { Box, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MobilePreview, ColorInput } from "../components";
import { theme } from "../theme";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { isValidHexColor, toHex } from "../utils";
import { RootState } from "./_app";
import { changeColor } from "../features/colorManipulation";
import { ColorPalettePreview } from "../components/ColorPalettePreview";
import { RandomColorButton } from "../components/RandomColorButton";
import { ColorType } from "../types";

const Home: NextPage = () => {
    const primary = useSelector<RootState>((state) => state.colorManipulation.primary);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const url = new URL(window.location.href);
        const hexFromURL = url.hash;
        // Update app's color scheme if there are valid hex triplet in URL
        if (isValidHexColor({ type: "hex", value: hexFromURL })) {
            dispatch(changeColor({ type: "hex", value: hexFromURL }));
        }
        // Update URL with current color if url has no color information
        if (hexFromURL.length === 0) {
            window.history.replaceState("", "", `/${toHex(primary as ColorType).value}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Head>
                    <title>UI Colors</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    {/* TODO: Add fonts to _docunent.tsx */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "100vh",
                    }}
                >
                    <Box
                        id="color-input"
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                        }}
                    >
                        <ColorInput />
                        <RandomColorButton />
                        <ColorPalettePreview />
                    </Box>
                    <Box
                        id="preview"
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                        }}
                    >
                        <MobilePreview />
                        <DarkModeSwitch />
                    </Box>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Home;
