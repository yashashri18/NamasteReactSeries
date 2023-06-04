import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile"
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent class- constructor")
    }
    componentDidMount(){
        console.log("parent class- componentDidMount")
    }
    render(){
        console.log("parent class- render")
        return(
            <div>
                <h1>About page</h1>
                {/* <ProfileFunctionalComponent name="Yashashri" city="Pune"/> */}
                {/* <Profile name="Yashashri" city="Pune"/> */}

                {/* <Profile name="First Child" city="Pune"/> */}
                {/* <Profile name="Second Child" city="Pune"/> */}

                {/* <ProfileFunctionalComponent name="Yashashri" city="Pune"/> */}

                <Profile name="Yashashri" city="Pune"/>
            </div>

            
        )
    }
}
export default About;