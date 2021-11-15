import { createGlobalStyle } from "styled-components";
import font from "../assets/fonts/Italiana-Regular.ttf";

const Typography = createGlobalStyle`
@font-face {
    font-family: Italiana;
    src: url(${font});
}
html {
    font-family: "Italiana", sans-serif;
    color: var(--text);
  }
`;

export default Typography;
