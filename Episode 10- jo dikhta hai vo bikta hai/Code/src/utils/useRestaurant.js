import {useState,useEffect} from "react"
import {FETCH_MENU_URL} from "../config"

const useRestaurant = (resId) => {

    const [restaurant, setRestaurant] = useState();

    useEffect(()=>{
        fetchRestaurantDeatils()
    },[])

    async function fetchRestaurantDeatils(){
        const data = await fetch(FETCH_MENU_URL+resId+"&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info)
    }
}
export default useRestaurant;