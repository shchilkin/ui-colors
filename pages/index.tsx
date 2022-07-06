import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { MobilePreview } from "../components/MobilePreview";
import { ColorInput } from "../components/ColorInput";

const Home: NextPage = () => (
    <div>
        <Head>
            <title>UI Colors</title>
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
);

export default Home;
