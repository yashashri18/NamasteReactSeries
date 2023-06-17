import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {toggleMenu} from "../utils/appSlice"
import SearchIcon from './SearchIcon'
import { cacheResults } from '../utils/searchSlice'
import {setVideos} from '../utils/videoSlice'
import {YOUTUBE_SEARCH_API,YOUTUBE_KEYWORD_SEARCH_API,GOOGLE_API_KEY} from '../utils/constants'

const Head = () => {

    const dispatch = useDispatch()

    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions , setShowSuggestion] = useState(false);

    const searchCache = useSelector(store => store.search.results);

    /**
     * results:{
     *  "ihpone":["iphone pro", "iphone pro max" , "iphone 13"]
     * }
     */
    useEffect(()=>{
        //make api call after every key press
        //but if the diff between two api calls < 200ms 
        //decline the api call
        // console.log("search cache is ")
        // console.log(searchCache)
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery])
                setShowSuggestion(true)
            }
            else{
                getSearchSuggestions()
            }
        },200)

        return () => {
            clearTimeout(timer)
        }
    },[searchQuery])

    const getSearchSuggestions = async() => {
        // console.log("api call is made for - " + searchQuery)
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        setShowSuggestion(true)

        //update in cache
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }))
    }

    const handleSuggestionClick = async (suggestion) => {
        // Fetch data here
        const data = await fetch(YOUTUBE_KEYWORD_SEARCH_API+suggestion+"&key="+GOOGLE_API_KEY);
        const json = await data.json();
        //setSearchQuery(suggestion)
        setShowSuggestion(false)
        setSuggestions([])

        // Dispatch action with the fetched data
        dispatch(setVideos(json.items))   
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return(
        <div className='header grid grid-flow-col p-2 m-2 shadow-lg items-center'>

            <div className='flex col-sapn-1 bg-red-300'>
                <img 
                    onClick={()=>toggleMenuHandler()} 
                    className='h-12 cursor-pointer'
                    alt="ham_menu" 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXz9fQzMzP3+fi2t7YiIiIqKirk5uU/Pz+AgYHn6ej2+PdaWlpwcHAlJSUfHx8ZGBnc3t2UlpXu8O+jpKM2NjbMzMxVVVVOTk4vLi4TExOjM+vzAAABA0lEQVR4nO3bAXKCMBBA0UBrW1BEQRTvf9H2EtudWd67wZ8MhAnZ1gAAAAAAAAAAAAAAAAAAAAAASDD2scbsvrZ9xNpaauM4nD+jnYfMxPEyddGmS2bhcA0P7LrrkFk4/0PhnFnYnqfwwNMzM7Df9ukUa9q3PjXxdv+Jdb+lBsZv+PlbPgAAAFDFGCs7r/XLV6wl+yBqfX3Heq2py9iv8x58ILzPa+YqLo/owL/Ex5JYOLzDA7vunfnfov4a1n8O679LD7AftvrfNAAAAEAN5e+Xlr8jfIB73uXv6teft6g/M1N/7qn+7Fr9+cNWf4YUAAAAAAAAAAAAAAAAAAAAAOCgfgHY3y+u9Hc0OQAAAABJRU5ErkJggg=="
                />
                <a href="/">
                    <img
                        className='h-12 mx-2' 
                        alt="app_logo" 
                        src="data:image/png;base64,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"
                    />
                </a>
            </div>

            <div className='relative col-span-10 bg-white  p-2 rounded-full w-1/2 m-auto'>
              
                <div className='flex items-center'>
                    <input 
                        className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 " 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        //onFocus={()=>setShowSuggestion(true)}
                        // onBlur={()=>setShowSuggestion(false)}
                    />
                    <button className="bg-[#f8f8f8] text-black px-4 py-2 rounded-r-full border border-gray-300">
                        <SearchIcon/>
                    </button>
                </div>
                {showSuggestions &&  
             <div className='absolute bg-white px-5 w-[42rem] shadow-lg rounded-lg  border-grey-100'>
                    <ul>
                        {suggestions.map((suggestion) => (
                            <li 
                            key={suggestion} 
                            className='py-2 px-3 shadow-sm hover:bg-gray-100'
                            onClick={()=>{handleSuggestionClick(suggestion)}}
                            >
                                <SearchIcon/>{suggestion}
                            </li>
                        ))}
                    </ul>
                </div>
            } 
            </div>
            
            <div className='col-span-1  bg-red-300'>
                <img
                    className='h-8'
                    alt="user_icon"
                    src="data:image/png;base64,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"
                />
            </div>
        </div>
    )
}
export default Head;



