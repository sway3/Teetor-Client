import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  input, button, textarea, select {
    font: inherit;
  }

  html {
    font-size: 87.5%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: #fafafa;
  }
`;

export default GlobalStyles;