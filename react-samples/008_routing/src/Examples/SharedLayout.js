import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'

const SharedLayout = () => {
    return (
        <BrowserRouter>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer>This is the footer</Footer>
        </BrowserRouter>
    )
}

const Footer = styled.footer`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    color: #c7c7c7;
`

export const Navbar = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
`

export default SharedLayout
