import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' w-11/12 mx-auto  ' >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout
