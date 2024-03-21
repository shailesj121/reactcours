const element = React.createElement("h1", {id: "heading"}, "This is React with CDN")

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(element)
