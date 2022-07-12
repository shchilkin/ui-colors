import type { AppProps } from "next/app";
import "../styles/styles.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import colorManipulationReducer from "../features/colorManipulation/colorManipulation";
import systemSettingsReducer from "../features/systemSettings/systemSettings";

const store = configureStore({
    reducer: { colorManipulation: colorManipulationReducer, systemSettings: systemSettingsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

const MyApp = ({ Component, pageProps }: AppProps) => (
    <SnackbarProvider>
        <Provider store={store}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </Provider>
    </SnackbarProvider>
);

export default MyApp;
