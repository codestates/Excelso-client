import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./container/style";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Cafe24SsurroundAir;
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

`;
