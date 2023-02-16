import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ButtonStyled } from './Button'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'

const Header = ({ action }) => {
  const theme = useTheme()

  const handleToggleThemeClick = () => {
    action()
  }
  return (
    <Navigator>
      <LogoContainer>
        <Logo>DR.CODE</Logo>
      </LogoContainer>

      <Tabs>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </Tabs>

      <ToggleDarkModeButton onClick={handleToggleThemeClick}>
        {theme.type === 'light' ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </ToggleDarkModeButton>
    </Navigator>
  )
}

const ToggleDarkModeButton = styled.div`
  margin-right: 1em;
  width: 50px;
  font-size: 1.5em;
  svg:hover {
    cursor: pointer;
    color: #dc3333;
  }
`

const LogoContainer = styled.div`
  width: 200px;
`

const Tabs = styled.div`
  display: flex;
  flex: 1;
`

const Logo = styled.div`
  border-radius: 4px;
  font-weight: bolder;
  font-family: 'Lobster', cursive;
  margin-left: 20px;
  font-size: 2em;
`

const ListItem = styled.li`
  border: none;
  padding: 1.5em;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  list-style: none;

  :hover {
    background-color: ${({ theme }) => theme.buttonColor};
  }
`

const Navigator = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  height: 80px;
  background: black;
`

export default Header
