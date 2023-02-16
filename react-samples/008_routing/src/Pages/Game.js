import React from 'react'
import Container from '../Components/Container'
import { useParams } from 'react-router-dom'

const Game = () => {
    const { gameName } = useParams()
    return <Container>This is {gameName} GAME !!</Container>
}

export default Game
