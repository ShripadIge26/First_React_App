import { useDispatch, useSelector } from 'react-redux'
import MenuItem from './MenuItem'
import {removeItem} from "../utils/cartSlice"


const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div className='cart-wrapper'>
            <h2>Cart Items</h2>
            <ul className="restaurant-menu">
                {cartItems.map((food) =>
                (<MenuItem
                    key={food.id}
                    currentItem={food}
                    onRemove={() => handleRemoveItem(food.id)}
                />))}
            </ul>
        </div>
    )
}

export default Cart