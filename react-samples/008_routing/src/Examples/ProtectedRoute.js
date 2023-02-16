import React, { useState } from 'react'
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom'

const ProtectedRouteExample = () => {
    const [isAuth, setAuth] = useState(true)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>HOME</div>}></Route>
                <Route path="/games" element={<div>GAMES</div>}></Route>
                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute isAuth={isAuth}>
                            <div>Im protected</div>
                        </ProtectedRoute>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}

const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/" replace />
    }
    return children
}

export default ProtectedRouteExample
