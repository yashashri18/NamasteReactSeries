import React from "react"
import ReactDOM  from "react-dom/client"

//React.createElement -> Object -> Html(DOM)
const heading = React.createElement(
    "h1",
    {
        id: "titleID",
        class: "titleClass"
    },
    "Hello World from React"
)
console.log(heading)

//console.log(heading) //returns object
//React element at the end of the day is JS object

//Writing React.createElement is painfull if we want to cretae huge html
//hence jsx comes into picture 
//we write jsx and babel converts jsx into React.createElement
//JSX is not html , it is html like syntax 

//writing jsx in single line
//JSX -> React.createElement -> Object -> Html(DOM)
//React Element - 
const heading1 = <h1 id="heading1"> this is Heading 1</h1>

//React Element - writing in multiple lines
const heading2 = (
    <h1 id="heading2"> 
        this is Heading 2
    </h1>
)
 
//React Component
const Title = () => (
    <h1>Namaste React Function</h1>
)

var xyz = 10;
//React Component 
const HeaderComponent = () => {
    return(
        <div>
            {/* we can use react element inside compoent */}
            {heading2}
            {/* we can write any piece of js inside jsx */}
            {/* this is very safe and jsx sanitizes it first */}
            {xyz}
            {console.log(10)}
            {/* Component Composistion */}
            <Title/>
            <h1>Namaste React</h1>
            <h2>This is h2 tag</h2>
            {2+6}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);