import { Box, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { MobilePreview } from "../components/MobilePreview";
import { ColorInput } from "../components/ColorInput";
import { theme } from "../theme";

const Home: NextPage = () => (
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
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ColorInput />
                </Box>
                <Box
                    id="preview"
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <MobilePreview />
                </Box>
            </div>
        </div>
    </ThemeProvider>
);

export default Home;
