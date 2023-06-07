import {useState,useEffect} from "react"
import {FETCH_MENU_URL} from "../config"
import { useParams } from "react-router-dom";

const useRestaurant = () => {
    const [restaurant, setRestaurant] = useState();
    //obj destructuring on the fly
    //const {resId} = useParams();
    const params = useParams();
    const {resId} = params;
    useEffect(()=>{
        fetchRestaurantDeatils()
    },[])

    async function fetchRestaurantDeatils(){
        const data = await fetch(FETCH_MENU_URL+resId+"&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info)
    }
    return restaurant;
}
export default useRestaurant;