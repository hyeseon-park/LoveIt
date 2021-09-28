import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${normalize}
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 1.5;
  }

  #root{
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    width: 100%;
    max-width: 720px;
    min-width: 320px;
    height: auto;
    margin: 0 auto;
    padding: 0 16px;
  }
  `;

export default GlobalStyles;
