import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeMenu = () => {
    return (
        <div className='my-4 mt-8 ' >
            <div>
                <nav  >
                    <ul className='flex items-center justify-center  space-x-4 ' >
                        <li> <NavLink className={"bg-[#4B6BFB] px-4 py-2 rounded-3xl text-white "} to={`/`} >Home</NavLink> </li>
                        <li> <NavLink className={"bg-[#4B6BFB] px-4 py-2 rounded-3xl text-white  "} to={`/add-new-blog`} >Add New Blog</NavLink> </li>
                        <li> <NavLink className={"bg-[#4B6BFB] px-4 py-2 rounded-3xl text-white  "} to={`/manage-blog`} >Manage Blog</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomeMenu
