import { useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png"
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => {
    return(
        <Link to="/">
            <img className="w-28" src={Logo} />
        </Link>
    )
}

const Header = () => {
    const {user} = useContext(userContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    return(
        <div style={{border:"1px solid black"}} className="m-3 p-3 flex justify-between items-center">
            <Title/>  
            <div className="nav-items">
                <ul className="flex list-none">
                    <li className="p-2.5"><Link to="/">Home</Link></li>
                    <li className="p-2.5"><Link to="/about">About</Link></li>
                    <li className="p-2.5"><Link to="/contact">Contact</Link></li>
                    <li className="p-2.5"><Link to="/instamart">Instamart</Link></li>
                    <li className="p-2.5"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <li className="p-2.5">{user.name}</li>
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