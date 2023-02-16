import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import { Navbar } from './SharedLayout'
import styled from 'styled-components'

const ActiveLinkExample = () => {
    return (
        <BrowserRouter>
            <Navbar>
                {/*                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            margin: '1rem 0',
                            color: isActive ? 'red' : '',
                        }
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            margin: '1rem 0',
                            color: isActive ? 'red' : '',
                        }
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            margin: '1rem 0',
                            color: isActive ? 'red' : '',
                        }
                    }}
                >
                    Contact
                </NavLink>*/}
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    &[class*='active'] {
        color: tomato;
        border-bottom: 4px solid tomato;
    }
`
export default ActiveLinkExample
