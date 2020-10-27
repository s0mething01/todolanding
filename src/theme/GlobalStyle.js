import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Overpass', sans-serif;
    @media (min-width: 1921px) {
      font-size: 68%;
    }
    @media (min-width: 3600px) {
      font-size: 140%;
    }
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Overpass', sans-serif;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-size: 1.6rem;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, span {
    margin: 0;
  }
  
  button {
    padding: 0;
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
