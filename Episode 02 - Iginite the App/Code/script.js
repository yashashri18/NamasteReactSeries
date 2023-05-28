import React from "react"
import ReactDOM  from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
        id: "titleID",
        class: "titleClass"
    },
    "Hello World from React"
)
console.log(heading) //returns object
//React element at the end of the day is JS object


//nested element
const heading1 = React.createElement(
    "h1",
    {
        id: "title1",
        key:"h1",
    },
    "Heading 1"
)
const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(container);