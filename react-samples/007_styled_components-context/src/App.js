import React, { useState } from 'react'
import GlobalStyle from './constants/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { ButtonStyled } from './components/Button'
import AnimatedButton from './components/AnimatedButton'
import styled from 'styled-components'

const darkTheme = {
  type: 'dark',
  bg: '#2c2c2c',
  text: '#e8e8e8',
  secondary: '#1ec77b',
  buttonColor: '#ff0081',
  elementsOpacity: '80',
}

const lightTheme = {
  type: 'light',
  bg: '#eaeaea',
  text: '#1c1c1c',
  secondary: '#1ec77b',
  buttonColor: '#ff0081',
  elementsOpacity: '80',
}

const App = () => {
  const [theme, setTheme] = useState(darkTheme)

  const handleThemeChange = () => {
    if (theme.type === 'light') {
      return setTheme(darkTheme)
    }
    setTheme(lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header action={handleThemeChange} />
      <Container>
        <ButtonStyled primary>Button</ButtonStyled>
        <ButtonStyled glow>Button</ButtonStyled>
        <ButtonStyled width={250}>Button</ButtonStyled>
        <ButtonStyled square>Button</ButtonStyled>

        <AnimatedButton>Animate Click!</AnimatedButton>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
