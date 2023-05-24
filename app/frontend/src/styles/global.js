import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    max-width: 360px;
  }
`;

export default GlobalStyle;
