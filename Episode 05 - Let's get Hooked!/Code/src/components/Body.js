import {restaurantList} from "../config"
import RestroCard from "./RestaurantCard"
import { useState } from "react"

const  filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText)
    )
}

const Body = () => {
    let [restaurants, setRestaurants] = useState(restaurantList);
    let [allRestaurants, setAllRestaurants] = useState(restaurantList);
    let [searchText, setSearchText] = useState("");
    return(
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
                        setRestaurants(data)
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant)=>{
                        return <RestroCard key={...restaurant.data.id} {...restaurant.data}/>
                    })
                }            
            </div>
        </>
    )
}

export default Body;