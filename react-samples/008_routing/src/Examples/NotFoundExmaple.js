import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'

const NotFoundExample = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>OK</div>}></Route>
                <Route path="/games" element={<div>OK</div>}></Route>
                <Route path="/orders" element={<div>OK</div>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NotFoundExample
