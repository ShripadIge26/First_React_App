import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CARD_IMG_CDN_LINK } from '../components/Config'
import {useDispatch} from 'react-redux'
import {addItem} from '../utils/cartSlice'
import MenuItem from "./MenuItem"

const RestaurantMenu = () => {

    const { resId } = useParams("");
    const [restaurantInfo, setRestaurantInfo] = useState({})
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([])
    const dispatch = useDispatch()

    const handleAddItem = (x) => {
        dispatch(addItem(x));
    };

    useEffect(() => {
        menuDetails(resId);
    }, []);

    // Pastaas by Pizza hut 861596

    async function menuDetails(resId) {
        const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";
        const data = await fetch(url);
        const json = await data.json();

        setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
        
        // console.log("this is output", json.data.cards);
        const regularMenu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        
        const depth1 = json.data.cards[4].groupedCard.cardGroupMap?.REGULAR?.cards.slice(2);
        const specialMenu = depth1.flatMap(item => item.card.card.itemCards).filter(item => item);

        
        setRestaurantMenuItems(regularMenu || specialMenu || []);
        
        // console.log(regularMenu);
        // console.log(Object.values(specialMenu));
        


        // console.log(depth2);
        
        // setRestaurantMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []);
        // if (restaurantMenuItems.length == 0) {
            
        // }
        
        
    }


    return (
        <div className="restaurant-main-info-wrapper">
            <div className="restaurant-info-wrapper">
                    <img src={CARD_IMG_CDN_LINK + restaurantInfo.cloudinaryImageId} alt="" className="info-cloudinary-image" />
                    <div className="info-details">
                        <h2>{restaurantInfo.name}</h2>
                        <p>Restaurant ID: {resId}</p>
                    </div>
            </div>
            <div>
                <h2>Menu Items</h2>
                <ul className="restaurant-menu">
                    {restaurantMenuItems.map(item => item?.card?.info).map((x) => (
                        // <li className="item" key={x.id}>{x.name} <button onClick={() => handleAddItem(x)}>Add</button></li>
                        <MenuItem key={x.id}
                            currentItem={x}
                            onAdd={handleAddItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu