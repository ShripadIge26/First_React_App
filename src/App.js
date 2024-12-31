import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import Help from "../src/components/Help"
import Contact from '../src/components/Contact'
import Cart from '../src/components/Cart'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "../src/components/Error"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    }
   
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
