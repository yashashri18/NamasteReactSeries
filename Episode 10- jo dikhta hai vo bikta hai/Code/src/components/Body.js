import {restaurantList} from "../config"
import RestroCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline"
import useFetchRestaurant from "../utils/useFetchRestaurant"

const Body = () => {

    //custom hook to fetch restaurant data using api
    const [allRestaurants,filteredRestaurants] = useFetchRestaurant();
    
    // let [allRestaurants,setAllRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("");

    //custom hook to check if the internet connection is there or not
    const isOnline = useOnline();



    if(!isOnline) return <div className="text-center text-amber-600	"><h1>Please check your Internet Connection!!</h1></div>
    //Early return - when dont have restaurants  - dont render anything
    if(!allRestaurants) return null;


    //if my filtered list is empty -> show no restro found
    //if(filteredRestaurants.length === 0) return <h1>No Matching Restaurant</h1>;

    //conditional rendering
    //if restaurantlist == empty ->load shimmer UI
    //else load actual UI
    return (allRestaurants.length === 0) ? (<Shimmer/>) : (
        <>
            <div>
                <input 
                    type="text" 
                    className="border-2 border-solid border-stone-950" 
                    placeholder="Search.."
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button
                    className="c"
                    onClick={()=>{
                        //need to filter the data and update the state
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return (
                            <Link key={restaurant.data.id} to={"/restaurant/"+restaurant.data.id}><RestroCard key={...restaurant.data.id} {...restaurant.data}/></Link>
                        )
                    })
                }            
            </div>
        </>
    )
}

export default Body;