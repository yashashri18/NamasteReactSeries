import {createContext} from "react";

const userContext = createContext({
    user:{
        name:"Yashashri",
        email:"yashashri@gmail.com"
    }
})

//this is helpful for debugging - in react dev tools
userContext.displayName = userContext
export default userContext;