import { createBrowserRouter } from "react-router-dom";
import Layout from './../layout/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout></Layout>,
        children : [
            {
                path: "/",
                element: <h1>Home</h1>
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