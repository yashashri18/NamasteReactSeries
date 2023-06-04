import {IMG_CDN_URL} from "../config"

const RestroCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {
    return(

        <div className="w-64 border-2 border-solid border-stone-950	p-1 m-3.5">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2> 
            <h3>{cuisines.join(", ")}</h3> 
            <h4>{avgRating} stars</h4> 
        </div>  
    )
}

export default RestroCard