import React from "react";
import ReactDOM  from "react-dom/client";
import "./App.css"
import Header from "./header.jsx";

const root = document.getElementById("root");
const h1 = React.createElement("h1", {title: "heading"} , "this is h1 heading" )
const h2 = React.createElement("h2", {title: "heading"} , "this is h2 heading" )
const h3 = React.createElement("h3", {title: "heading"} , "this is h3 heading" )

const Jsxcomponent = (
    <div className="title">
        <h1 title="heading">this is h1 heading</h1>
        <h2 title="heading">this is h2 heading</h2>
        <h3 title="heading">this is h3 heading</h3>
    </div>
)

const TitleComponent = <h1>THis is title Component using </h1>
const TitleComponent2 = ()=> <h1>THis is title Component2 using </h1>

const Jsxfunctionalcomponent = ()=> (
    <div className="title">
        {TitleComponent}
        {<TitleComponent2/>}
        {<TitleComponent2></TitleComponent2>}
        <h1 title="heading">this is h1 heading</h1>
        <h2 title="heading">this is h2 heading</h2>
        <h3 title="heading">this is h3 heading</h3>
    </div>
)

const elementReact = React.createElement("div", {className: "title"}, [h1,h2,h3])
const mainroot = ReactDOM.createRoot(root)
mainroot.render([<Header />,elementReact,Jsxcomponent,<Jsxfunctionalcomponent/>])
