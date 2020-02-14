import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* 这样rem 和 px 同步 */
    font-size: 100px;
    width: 100vw;
    body {
      font-size: .12rem;
      background-color: #fafafa;

      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      h2, h3, p, ul, ol, li {
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }
      span {
        white-space: nowrap;
      }
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;