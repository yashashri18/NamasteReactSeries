import { useState } from "react";
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";

const Title = () => {
    return(
        <Link to="/">
            <img className="w-28" src={Logo} />
        </Link>
    )
}

// 
//     
//     align-items: center;

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        
        <div style={{border:"1px solid black"}} className="m-3 p-3 flex justify-between items-center">
            <Title/>  
            <div className="nav-items">
                <ul className="flex list-none">
                    <li className="p-2.5"><Link to="/">Home</Link></li>
                    <li className="p-2.5"><Link to="/about">About</Link></li>
                    <li className="p-2.5"><Link to="/contact">Contact</Link></li>
                    <li className="p-2.5"><Link to="/instamart">Instamart</Link></li>
                    <li className="p-2.5">Cart</li>
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