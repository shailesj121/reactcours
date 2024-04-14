"use client"
import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header.jsx"
import Body from "./components/body.jsx"
import Footer from "./components/footer.jsx"
import Filter from "./components/filter.jsx"
import "./App.css"


const App = () => {

    const [showBtn, setShowBtn] = useState(false);
    const showfilter = () => showBtn ? setShowBtn(false) : setShowBtn(true);

    return (
        <>
            <Header />
            <Body showfilter={showfilter} />
            <Footer />
            {showBtn ? <Filter showfilter={showfilter} /> : null}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)