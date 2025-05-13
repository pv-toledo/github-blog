import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme["base-background"]};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme["base-text"]};
    }

    body, input, textarea, button {
        font: 400 1rem "Nunito", sans-serif;
    }

`