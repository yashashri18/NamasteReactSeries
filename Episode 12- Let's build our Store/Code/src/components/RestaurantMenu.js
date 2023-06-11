import {IMG_CDN_URL} from "../config";
import {useEffect,useEffect, useState} from 'react'
import Shimmer from "./Shimmer"
import useRestaurantDetails from "../utils/useRestaurantDetails"
import {addItem} from "../utils/cartSlice"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    
    const restaurantInfo = useRestaurantDetails();
    const dispatch = useDispatch();

    
    if (restaurantInfo  === null ) return <Shimmer/>

    const addFoodItem = (item)=>{
        dispatch(addItem(item))
    }
    const {name, city , locality, costForTwoMessage,cloudinaryImageId} = restaurantInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (
        <div className="w-full text-center">
            <div>
                <h1 className="text-bold text-2xl">{name}</h1>
                <h1>{city}</h1>
                <h1>{locality}</h1>
                <h1>{costForTwoMessage}</h1>
                <img className="m-auto" src={IMG_CDN_URL + cloudinaryImageId} alt="Restaurant" />
                <h2 className="text-bold text-2xl">Menu</h2>
            </div>
            <div>
                <ul className="list-disc list-inside">
                    {itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - {item?.card?.info?.price / 100}
                            <button onClick={()=>{addFoodItem(item?.card?.info)}} className="p-1 bg-green-50">Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;