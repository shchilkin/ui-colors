import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
    typography: {
        fontFamily: "'Poppins', sans-serif",
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 500,
            fontSize: 18,
        },
        subtitle1: {
            fontWeight: 300,
        },
        body1: {
            fontWeight: 300,
            fontSize: 14,
        },
    },
});
