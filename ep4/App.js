import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";
import Footer from "./components/footer.jsx";

const App = ()=> (
    <>
    <Header></Header>
    <Main/>
    <Footer/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)