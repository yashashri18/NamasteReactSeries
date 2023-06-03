import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../config"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {

    //const params = useParams();
    //const {resId} = params;
    //obj destructuring on the fly
    const {resId} = useParams();
    
    const [restaurant, setRestaurant] = useState();

    useEffect(()=>{
        fetchRestaurantDeatils()
    },[])

    async function fetchRestaurantDeatils(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" + resId + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info)
    }
   
    return !restaurant ? (<Shimmer/>) : (
        <div className="restro_details">
            <h2>Restaurant Id is : {resId}</h2>
            <h3>{restaurant?.name}</h3>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.costForTwoMessage}</h3>
            <h3>{restaurant?.avgRating} Stars</h3>
        </div> 
    )
}

export default RestaurantMenu;