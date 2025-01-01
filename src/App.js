import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";
import Help from "../src/components/Help"
import Contact from '../src/components/Contact'
import Cart from '../src/components/Cart'
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "../src/components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
        ]
    }
   
])




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
