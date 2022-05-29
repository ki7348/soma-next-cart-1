import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: "Noto Sans KR";
    background-color: #2d3436;
  }
  button {
    border: none;
  }
`;

export default GlobalStyle;
