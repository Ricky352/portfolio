import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    #__next {
        height: 100vh;
        width: 100vw;
    }

    body {
        background-color: black;
        font-family: 'Rajdhani', sans-serif;
    }

    /* * {
        box-sizing: border-box;
        outline: 1px solid white !important;
    } */
`;
