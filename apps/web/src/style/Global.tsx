import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', 'Inter', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #010A01;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  #__next {
    position: relative;
    z-index: 1;
  }

  #portal-root {
    position: relative;
    z-index: 2;
  }
`

export default GlobalStyle
