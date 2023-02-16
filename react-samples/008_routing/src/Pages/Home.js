import React from 'react'
import Container from '../Components/Container'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <Container>
            This is Home !!
            <Outlet />
        </Container>
    )
}

export default Home
