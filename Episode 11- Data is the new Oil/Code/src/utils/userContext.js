import {createContext} from "react";

const userContext = createContext({
    user:{
        name:"Yashashri",
        email:"yashashri@gmail.com"
    }
})

export default userContext;