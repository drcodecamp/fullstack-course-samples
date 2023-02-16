import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  height: ${({ height }) => (height ? height : 50)}px;
  width: ${({ width }) => (width ? width : 100)}px;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme, primary }) => (primary ? theme.buttonColor : theme.secondary)};
  color: #fff;
  border-radius: ${({ square }) => (square ? 0 : 4)}px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: ${({ glow }) =>
    glow &&
    css`0 2px 25px ${({ theme, primary }) => (primary ? theme.buttonColor : theme.secondary)}`};
  :hover {
    background-color: ${({ primary, theme }) =>
      primary ? theme.buttonColor + theme.elementsOpacity : theme.secondary};
  }

  :focus {
    outline: 0;
  }
`
