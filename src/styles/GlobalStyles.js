import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/Italiana-Regular.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: Italiana;
    src: url(${font});
}

:root {
 --red: #94291E;
 --red2: #D6303E;
 --text: #E5E5E5;
}

* {
    font-family: "Italiana", sans-serif;
    box-sizing: border-box;
    letter-spacing: 0.4px;
    scroll-behavior: smooth;
}

html {
    background-color: var(--red);
    display: flex;
    flex-direction: column;
}

body {
    min-height: 100vh;
}

`;

export default GlobalStyles;
