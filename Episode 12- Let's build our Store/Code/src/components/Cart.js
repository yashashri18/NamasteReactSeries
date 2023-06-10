import { useSelector } from "react-redux"
import CartFoodItem from "./CartFoodItem"
const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    return(
        <div>
            <h1 className="font-bold text-3xl">Cart Count - {cartItems.length}</h1>
            <CartFoodItem {...cartItems[0]}/>
        </div>
    )
}

export default Cart