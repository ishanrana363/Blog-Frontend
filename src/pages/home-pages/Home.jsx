import React from 'react'
import Banner from './Banner'
import HomeMenu from './HomeMenu'
import ManageBlog from '../blog-page/ManageBlog'
import SignUpFrom from './SignUpFrom'

const Home = () => {
    return (
        <div>
            <HomeMenu></HomeMenu>
            <Banner></Banner>
            <ManageBlog></ManageBlog>
            <SignUpFrom></SignUpFrom>
        </div>
    )
}

export default Home
