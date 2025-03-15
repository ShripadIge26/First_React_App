import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CARD_IMG_CDN_LINK } from '../components/Config'
import {useDispatch} from 'react-redux'
import {addItem} from '../utils/cartSlice'
import MenuItem from "./MenuItem"
// import restaurantData from "../components/RestaurantData";
import r171106 from "../assets/171106.json";
import r103726 from "../assets/103726.json";
import r861596 from "../assets/861596.json";
import r103778 from "../assets/103778.json";
import r474042 from "../assets/474042.json";
import r456896 from "../assets/456896.json";
import r112367 from "../assets/112367.json";
import r484781 from "../assets/484781.json";
import r103721 from "../assets/103721.json";
import r362861 from "../assets/362861.json";
import r403848 from "../assets/403848.json";
import r152423 from "../assets/152423.json";
import r750630 from "../assets/750630.json";
import r390535 from "../assets/390535.json";


const restaurantData = {
    "171106": r171106,
    "103726": r103726,
    "861596": r861596,
    "103778": r103778,
    "474042": r474042,
    "456896": r456896,
    "112367": r112367,
    "484781": r484781,
    "103721": r103721,
    "362861": r362861,
    "403848": r403848,
    "152423": r152423,
    "750630": r750630,
    "390535": r390535,
};
// import json from "../assets/103726.json"

const RestaurantMenu = () => {

    const { resId } = useParams("");
    const [restaurantInfo, setRestaurantInfo] = useState({})
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([])
    const [cloudinaryImage, setCloudinaryImage] = useState("");
    const dispatch = useDispatch()

    const handleAddItem = (x) => {
        dispatch(addItem(x));
    };

    useEffect(() => {
        menuDetails(resId);
    }, [resId]);

    // Pastaas by Pizza hut 861596

    async function menuDetails(resId) {

        try {
            // const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";
            // const data = await fetch(url);
            // const json = await data.json();
            console.log(resId)
            const json = restaurantData[resId];
            
            console.log(json);

            setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
            const depth1 = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
            const regularMenu = depth1?.cards[2]?.card?.card?.itemCards;
            
            const depth2 = depth1?.cards?.slice(2);
            const specialMenu = depth2?.flatMap(item => item?.card?.card?.itemCards).filter(item => item);
            setCloudinaryImage(json.data.cards[2].card.card.info.cloudinaryImageId);

            setRestaurantMenuItems(regularMenu || specialMenu || []);
            console.log()
        } catch (error) {
            console.error("Error loading restaurant data:", error);
        }
        
    }


    return (
        <div className="restaurant-main-info-wrapper">
            <div className="restaurant-info-wrapper">
                    <img src={CARD_IMG_CDN_LINK + cloudinaryImage} alt="" className="info-cloudinary-image" />
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