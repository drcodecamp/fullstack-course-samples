import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const UseNavigateExample = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Home Page!</div>}></Route>
                <Route path="/games" element={<Games />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const Games = () => {
    const [counter, setCounter] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            if (counter === 0) {
                return navigate('/')
            }
            setCounter(counter - 1)
        }, 1000)
    }, [counter])
    return <div>Count down {counter}</div>
}

export default UseNavigateExample
