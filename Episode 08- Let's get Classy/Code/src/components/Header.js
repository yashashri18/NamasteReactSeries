import { useState } from "react";
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";

const Title = () => {
    return(
        <a href="/">
            <img className="logo" src={Logo} />
        </a>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        //inline styling
        <div style={{ border:"1px solid black"} }className="header">
            <Title/>  
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {/* conditional rendering */}
            {isLoggedIn ? 
            <button onClick = {()=>{setIsLoggedIn(false)}}>Logout</button > 
            :
            <button onClick = {()=>{setIsLoggedIn(true)}}>Login</button>}
        </div>
    )
}

export default Header;