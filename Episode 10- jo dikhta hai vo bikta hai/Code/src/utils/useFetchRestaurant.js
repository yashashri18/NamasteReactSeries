import { useState, useEffect } from "react";
const useFetchRestaurant = () => {
    //at any given point of time , we need two lists 
    //allrestaurants and filtered restaurants 
    //initially allrestaurants == filtered restaurants
    //all restaurants will be used for searching from all restro list
    //filtered list will be used to show results on UI


    let [allRestaurants,setAllRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

    return [allRestaurants,filteredRestaurants];
}
export default useFetchRestaurant;