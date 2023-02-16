import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import NotFound from '../Pages/NotFound'
import Games from '../Pages/Games'
import Game from '../Pages/Game'

const NestedRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                </Route>
                <Route path="/games">
                    <Route index element={<Games />}></Route>
                    <Route path=":gameName" element={<Game />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NestedRoutes
