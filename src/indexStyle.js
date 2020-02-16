import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* 这样rem 和 px 同步 */
    width: 100vw;
    /* font-size: 100px; */
    /* 媒体查询 */
    @media screen and (max-width: 420px) {
      font-size: 26vw;
    }
    @media screen and (min-width: 414px) {
      font-size: 10vw;
    }
    body {
      font-size: .16rem;
      background-color: #fafafa;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      
      div, h1, h2, h3, h4, h5, h6, p, ul, ol, li, input, select, textarea, button, img {
        margin: 0;
        padding: 0;
      }
      h2, h3, p, span {
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