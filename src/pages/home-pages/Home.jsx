import React from 'react'
import Banner from './Banner'
import HomeMenu from './HomeMenu'
import ManageBlog from '../blog-page/ManageBlog'

const Home = () => {
    return (
        <div>
            <HomeMenu></HomeMenu>
            <Banner></Banner>
            <ManageBlog></ManageBlog>
        </div>
    )
}

export default Home
