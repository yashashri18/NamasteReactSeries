import React, { useState } from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Profile from "./components/Profile"
import RestaurantMenu from "./Components/RestaurantMenu"
import Error from "./components/Error"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import { lazy, Suspense } from "react"
import Shimmer from "./components/Shimmer"
import userContext from "./utils/userContext"
import {Provider} from "react-redux"
import store from "./utils/store"
import Cart from "./components/Cart"

//import About from "./components/About"
//import Instamart from "./components/Instamart"

//Lazy Loading aka Chunking / Code Splitting 
// Dynamic Bundkling / On Demand Loading / Dynamic Import
const Instamart = lazy(()=>import("./components/Instamart"))
const About = lazy(()=>import("./components/About"))

const AppLayout = () => {
    const [user, setUser] = useState({
        name:'Yashashri B.',
        email:"yashashri18.bongulwar@gmail.com"
    })
    return (
        <Provider store={store}>
            <userContext.Provider
                value={{ 
                    user:user ,
                    setUser:setUser
                }}
            >
                <Header/>
                <Outlet/>
                <Footer/>
            </userContext.Provider>
        </Provider>  
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Please Wait</h1>}><About/></Suspense>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}>
                            <Instamart/>
                        </Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);