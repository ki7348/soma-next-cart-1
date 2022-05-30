import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: "Noto Sans KR";
    background-color: #2d3436;
    margin: 0px;
    padding: 0px;
  }
  button {
    border: none;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
