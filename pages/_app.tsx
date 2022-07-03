import type { AppProps } from "next/app";
import "../styles/styles.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import colorManipulationReducer from "../features/colorManipulation/colorManipulation";

const store = configureStore({
    reducer: { colorManipulation: colorManipulationReducer },
});

export type RootState = ReturnType<typeof store.getState>;

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
    </Provider>
);

export default MyApp;
