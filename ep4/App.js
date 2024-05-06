import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import "./App.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Error from "./components/error/Error.jsx"
import Body from "./components/body.jsx"
import { createBrowserRouter } from "react-router-dom"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)