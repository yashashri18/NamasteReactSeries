import { useState, useEffect } from "react";
const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)

        //the listeners should be removed if we are chnaging the page 
        //it should work only if component is loaded and remove while unmounting
        //othwerwise after changing page also it will run in background
        return()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])

    return isOnline;
    
}
export default useOnline;