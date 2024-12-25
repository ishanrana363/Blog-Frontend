import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { ThemeUserContext } from './../context/ThemeContext';

const Layout = () => {
    const [drakMode, setIsDrakMode] = useState(true);
    return (
        <div>
            <ThemeUserContext.Provider value={{ drakMode, setIsDrakMode }}>
                <Navbar></Navbar>
                <div className={` ${drakMode ? "dark" : ""}   `} >
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </ThemeUserContext.Provider>

        </div>
    )
}

export default Layout
