import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header.jsx"
import Body from "./components/body.jsx"
import Footer from "./components/footer.jsx"
import Filter from "./components/filter.jsx"
import "./App.css"
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Error from "./components/error/Error.jsx"



const App = () => {

    const [showBtn, setShowBtn] = useState(false);
    const showfilter = () => showBtn ? setShowBtn(false) : setShowBtn(true);

    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
            {showBtn ? <Filter showfilter={showfilter} /> : null}
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
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