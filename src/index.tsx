import * as React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const theme = {
    primary: "#ff0000",
    secondary: "#ffff00",
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
);
