import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header.jsx"
import Body from "./components/body.jsx"
import Footer from "./components/footer.jsx"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = ()=> (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)