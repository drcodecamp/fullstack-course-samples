import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import { Navbar } from './SharedLayout'

const OutletExample = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route path="messages" element={<DashboardMessages />} />
                    <Route path="tasks" element={<DashboardTasks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"*/}
            <Outlet />
        </div>
    )
}

function DashboardMessages() {
    return (
        <div>
            <h1>DashboardMessages</h1>
            <Outlet />
        </div>
    )
}

function DashboardTasks() {
    return (
        <div>
            <h1>DashboardTasks</h1>
            <Outlet />
        </div>
    )
}

export default OutletExample
