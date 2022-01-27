import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #d3d3d3;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-ligth: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* font-size> 16px */
    hmtl {
 
        @media (max-width: 1080px) {
            font-size: 93.75%;/* 15px */
        }

        @media (max-width: 720px) {
            font-size: 87.5%;/* 14px */
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; /* deixa a fonte mais bonitinha     */
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`   