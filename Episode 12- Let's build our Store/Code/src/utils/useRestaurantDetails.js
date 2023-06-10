import {useState,useEffect} from "react"
import {FETCH_MENU_URL} from "../config"
import { useParams } from "react-router-dom";

const useRestaurantDetails = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const params = useParams();
    const {resId} = params;
    useEffect(()=>{
        fetchMenu();
    },[]);

    async function fetchMenu(){
        const data = await fetch(FETCH_MENU_URL+resId+"&submitAction=ENTER")
        const json = await data.json();
        setRestaurantInfo(json.data);
    }
    return restaurantInfo;

}

export default useRestaurantDetails;