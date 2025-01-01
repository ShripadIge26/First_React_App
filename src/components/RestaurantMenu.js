import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CARD_IMG_CDN_LINK } from '../components/Config'

const RestaurantMenu = () => {

    const { resId } = useParams("");
    const [restaurantInfo, setRestaurantInfo] = useState({})
    const [restaurantMenuItems, setRestaurantMenuItems] = useState([])

    useEffect(() => {
        menuDetails(resId);
    }, [])

    async function menuDetails(resId) {
        const url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER";
        const data = await fetch(url);
        const json = await data.json();

        setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
        setRestaurantMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(restaurantMenuItems)
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
                <h2>Items Menu</h2>
                <ul className="restaurant-menu">
                    {restaurantMenuItems.map(item => item?.card?.info).map(x => (
                        <li className="item" key={x.id}>{x.name} <button>Add</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu