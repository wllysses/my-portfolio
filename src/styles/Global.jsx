import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F6F6F6;
        --primary-color: #191A2E;
        --secondary-color: #693685;
        --white: #fff;
        --grey: #E7E7E7;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
        list-style: none;
        text-decoration: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: linear-gradient(270deg,#1b1429,#140f23);
        --webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    p {
        margin: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`