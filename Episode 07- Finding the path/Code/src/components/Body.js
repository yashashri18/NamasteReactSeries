import {restaurantList} from "../config"
import RestroCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

const  filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () => {
    //at any given point of time , we need two lists 
    //allrestaurants and filtered restaurants 
    //initially allrestaurants == filtered restaurants
    //all restaurants will be used for searching from all restro list
    //filtered list will be used to show results on UI
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    let [allRestaurants,setAllRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("");

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants (){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        //console.log(json.data.cards[2].data.data.cards)
        //optional chaining
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
  
    //Early return - when dont have restaurants  - dont render anything
    if(!allRestaurants) return null;


    //if my filtered list is empty -> show no restro found
    //if(filteredRestaurants.length === 0) return <h1>No Matching Restaurant</h1>;

    //conditional rendering
    //if restaurantlist == empty ->load shimmer UI
    //else load actual UI
    return (allRestaurants.length === 0) ? (<Shimmer/>) : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search.."
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button
                    onClick={()=>{
                        //need to filter the data and update the state
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return <RestroCard key={...restaurant.data.id} {...restaurant.data}/>
                    })
                }            
            </div>
        </>
    )
}

export default Body;