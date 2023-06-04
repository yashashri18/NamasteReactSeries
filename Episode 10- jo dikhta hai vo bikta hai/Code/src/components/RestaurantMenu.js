import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../config"
import Shimmer from "./Shimmer"
import {useRestaurant} from "../utils/useRestaurant"

const RestaurantMenu = () => {

    //const params = useParams();
    //const {resId} = params;
    //obj destructuring on the fly
    const {resId} = useParams(resId);

    //useRestaurant is the custom hook created 
    //to leverage the job of getching data
    const restaunat = useRestaurant()
   
    return !restaurant ? (<Shimmer/>) : (
        <div className="w-full	 text-center">
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