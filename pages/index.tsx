import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
    <div>
        <Head>
            <title>UI Colors</title>
        </Head>
        {/* <AppBar elevation={0}>UI Colors</AppBar> */}
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
                    bgcolor: "#ed2939",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography>Input</Typography>
            </Box>
            <Box
                id="preview"
                sx={{
                    bgcolor: "#ed2",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography>Preview</Typography>
            </Box>
        </div>
    </div>
);

export default Home;
