import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Roboto, sans-serif;
        margin: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.bg};
        color: white;
    }
`

export default GlobalStyle
