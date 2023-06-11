import {IMG_CDN_URL} from "../config"
import { useDispatch } from "react-redux";
import {removeItem} from "../utils/cartSlice"


const CartFoodItem = ({id,name,imageId,category,price}) => {
    const dispatch = useDispatch();
    
    const removeItemfromCart = (id) => {
        dispatch(removeItem(id))
    }
    return(
        <div className="w-64 border-2 border-solid border-stone-950	p-1 m-3.5">
            <img src={IMG_CDN_URL+imageId}/>
            <h2>{name}</h2> 
            <h3>{category}</h3> 
            <h4>{price / 100} stars</h4> 
            <button
                onClick={()=>{
                    removeItemfromCart(id)
                }}
                className="p-1 bg-red-400">
                    Remove from Cart
            </button> 
        </div>  
    )
}

export default CartFoodItem

