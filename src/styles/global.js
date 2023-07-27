import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Regular.otf) format('opentype');
  }

  @font-face {
    font-family: 'Avenir Next Bold';
    src: url(/fonts/AvenirNext-Bold.otf) format('opentype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Avenir Next It';
    src: url(/fonts/AvenirNext-It.otf) format('opentype');
    font-weight: italic;
  }
  @font-face {
    font-family: 'Avenir Next Medium';
    src: url(/fonts/AvenirNext-Medium.ttf) format('truetype');
    font-weight: 500;
  }

  body {
    margin: 0;
    font-family: 'Avenir Next';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

::-webkit-scrollbar {
  visibility: hidden;
  width: 0;
}
`
