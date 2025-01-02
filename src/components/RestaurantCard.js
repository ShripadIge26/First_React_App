import React from "react"
import {CARD_IMG_CDN_LINK} from '../components/Config'

const RestaurantCard = ({cloudinaryImageId, name, cuisines}) => {
    
    return (
        <>
            <div className="banner-image-wrapper">
                <img className="banner-image" src={CARD_IMG_CDN_LINK + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <p>{cuisines?.join(", ")}</p>
        </>
    )
}

export default RestaurantCard