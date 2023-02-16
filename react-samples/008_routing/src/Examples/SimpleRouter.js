import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const SimpleRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Hii</div>}></Route>
                <Route path="/bye" element={<div>Bye Bye!</div>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SimpleRouter
