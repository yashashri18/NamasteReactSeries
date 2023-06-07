
import {IMG_CDN_URL} from "../config";
import useRestaurant from "../utils/useRestaurant"
import Shimmer from "./Shimmer"


const RestaurantMenu = () => {

    //useRestaurant is the custom hook created 
    //to leverage the job of getching data
    const restaurant = useRestaurant()
   
    return !restaurant ? (<Shimmer/>) : (
        <div className="w-full	 text-center">
            {/* <h2>Restaurant Id is : {resId}</h2> */}
            <h3>{restaurant?.name}</h3>
            <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.costForTwoMessage}</h3>
            <h3>{restaurant?.avgRating} Stars</h3>
        </div> 
    )
}



export default RestaurantMenu;