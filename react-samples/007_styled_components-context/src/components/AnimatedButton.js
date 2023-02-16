import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

const topBubbles = keyframes`
    0%{
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;}
    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
        background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
`

const bottomBubbles = keyframes`
    0%{
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;}
    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
    }
`

const AnimatedButton = ({ children }) => {
  const [isAnimating, setAnimating] = useState(false)

  const handleClick = () => {
    setAnimating(!isAnimating)
  }

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setAnimating(!isAnimating)
      }, 1000)
    }
  })

  return (
    <Button onClick={handleClick} isAnimating={isAnimating}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  margin-top: 100px;
  margin-bottom: 60px;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.buttonColor};
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

  :hover {
    background-color: ${({ theme }) => theme.buttonColor + theme.elementsOpacity};
  }

  :focus {
    outline: 0;
  }

  :before,
  :after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  :before {
    display: ${({ isAnimating }) => (isAnimating ? 'block' : 'none')};
    animation: ${(props) =>
      props.isAnimating &&
      css`
        ${bottomBubbles} 1s ease forwards;
      `};
    top: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }
  :after {
    display: ${({ isAnimating }) => (isAnimating ? 'block' : 'none')};
    animation: ${(props) =>
      props.isAnimating &&
      css`
        ${topBubbles} 1s ease forwards;
      `};
    bottom: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }

  :active {
    transform: scale(0.9);
    background-color: #e60074;
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }
`

export default AnimatedButton
