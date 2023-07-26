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

h1 {
  font-weight: bold;
  font-size: 24px;
  line-height: 22px;
  color: black;
  font-family: 'Avenir Next Bold';
}

h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  font-family: 'Avenir Next';
}

::-webkit-scrollbar {
  visibility: hidden;
  width: 0;
}

@media (max-width: 420px) {
  h1 {
    font-size: 18px;
  }

  h3 {
    font-size: 12px;
  }
}
`
