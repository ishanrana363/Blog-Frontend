import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import Home from "../pages/home-pages/Home";
import AddBlog from './../pages/blog-page/AddBlog';
import ManageBlog from './../pages/blog-page/ManageBlog';
import BlogList from "../pages/blog-page/BlogList";
import BlogDetails from "../pages/blog-page/BlogDetails";
import UpdateBlog from "../pages/blog-page/UpdateBlog";
import AboutPage from "../pages/about-page/AboutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout></Layout>,
        children : [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            },
            {
                path : "add-new-blog",
                element : <AddBlog></AddBlog>
            },
            {
                path : "manage-blog",
                element : <BlogList></BlogList>
            },
            {
                path : "blog-details/:id",
                element : <BlogDetails></BlogDetails>
            },
            {
                path : "blog-update/:id",
                element : <UpdateBlog></UpdateBlog>
            }
        ]
    }
])