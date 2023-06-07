import { useContext } from "react";
import userContext from "../utils/userContext";
const styleObj = {
    border:"1px solid black",
    textAlign:"center",
    padding:"10px"
}

const Footer = () => {
    const {user} = useContext(userContext)
    return(
        // Inline styling using js obj
        <h4 style={styleObj}>Made By {user.name}</h4>
    )
}

export default Footer;