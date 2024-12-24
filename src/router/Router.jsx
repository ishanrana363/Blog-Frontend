import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';
import Home from "../pages/home-pages/Home";

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
                element: <h1>About</h1>
            },
            {
                path: "/contact",
                element: <h1>Contact</h1>
            }
        ]
    }
])