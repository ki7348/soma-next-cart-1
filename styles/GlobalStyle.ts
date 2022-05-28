import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Noto Sans KR";
  }
  button {
    border: none;
  }
`;

export default GlobalStyle;
