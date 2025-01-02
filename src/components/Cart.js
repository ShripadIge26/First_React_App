import {useSelector} from 'react-redux'
import RestaurantCard from './RestaurantCard';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div>
            <h2>Cart Items</h2>
            <RestaurantCard {...cartItems[0]}/>
        </div>
    )
}

export default Cart