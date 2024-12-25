import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeMenu = () => {
    return (
        <div className='my-4 mt-8 ' >
            <div>
                <nav  >
                    <ul className='flex items-center justify-center space-x-3  lg:space-x-4 ' >
                        <li> <NavLink className={"bg-[#4B6BFB] px-2 py-1 text-[10px] lg:text-[16px] lg:px-4 lg:py-2 rounded-3xl text-white "} to={`/`} >Home</NavLink> </li>
                        <li> <NavLink className={"bg-[#4B6BFB] px-2 py-1 text-[10px] lg:text-[16px] lg:px-4 lg:py-2 rounded-3xl text-white  "} to={`/add-new-blog`} >Add New Blog</NavLink> </li>
                        <li> <NavLink className={"bg-[#4B6BFB] px-2 py-1 text-[10px] lg:text-[16px] lg:px-4 lg:py-2 rounded-3xl text-white  "} to={`/manage-blog`} >Manage Blog</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomeMenu
