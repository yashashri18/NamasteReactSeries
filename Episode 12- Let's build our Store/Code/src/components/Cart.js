import { useSelector } from "react-redux"
import CartFoodItem from "./CartFoodItem"
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();
    const clearCartItems = () =>{
        dispatch(clearCart())
    }
    return(
        <div>
            <h1 className="font-bold text-3xl m-5">Cart Count - {cartItems.length}</h1>
            <div>
                <button 
                    className="p-3 bg-red-500 border m-5 text-xl"
                    onClick={()=>{clearCartItems()}}>
                        Clear Cart
                </button>
            </div>
            <div className="flex">
                {cartItems.map((item)=>(
                    <CartFoodItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default Cart