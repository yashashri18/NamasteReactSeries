import { useState, useEffect } from "react";
const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Child Functional Component - setInterval "+ props.name)
        },1000)
        //api call
        console.log("Function - UseEffect")

        return(()=>{
            clearInterval(timer);
            console.log("UseEffect Return")
        })
    })
    console.log("Function - Render")
    return(
        <div style={{ border:"1px solid black", margin:"10px",padding:"10px" }}>
            <h2>Profile Function Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>City: {props.city}</h3>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <button onClick={()=>
                {
                    setCount(1)
                    setCount2(1)
                }
            }>Update count</button>
        </div>
    )
}

export default Profile;