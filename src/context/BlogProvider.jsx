import React, { createContext, useState } from 'react'
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
    const [searchTearm, setSearchTerm] = useState("")
    return (
        <BlogContext.Provider value={{ searchTearm, setSearchTerm }} >
            {
                children
            }
        </BlogContext.Provider>
    )
}

export default BlogProvider
