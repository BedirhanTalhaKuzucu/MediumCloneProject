import React from 'react'
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home"
import UserDashboard from "../pages/UserDashboard"

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ < Home /> } />
            <Route path='home' element={ < UserDashboard /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter