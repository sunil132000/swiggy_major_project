import React, { Suspense, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import Heading from "./Components/Heading";
import { Body } from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/Contact.js";
import { Error } from "./Components/Error.js";
import Basic from "./Components/Basic.js";
import { Cart } from "./Components/Cart.js";
import { Help } from "./Components/Help.js";
import UserContext from "./Utilis/userContext.js";



const About = lazy(() =>
    import("./Components/About.js")
)

const All = () => {
    const [user, setUser] = useState(
        {
            name: "sunil Kumar Singh",
            email: " sunil@gmail.com"
        })
    return (
        <>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Heading />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <All />,
        errorElement: <Error />,
        children: [
            {
                path: "/contact",
                element: <About />,

            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/login",
                element: <Basic />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>page loading .........</h1>}><About /></Suspense>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
                errorElement: <Error />
            },
            {
                path: "/Help",
                element: <Help />,
                errorElement: <Error />
            }
        ]

    },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);