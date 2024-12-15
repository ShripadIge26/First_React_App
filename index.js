import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (
//     <h1 id='title' key="h1">
//         Hello world
//     </h1>
// )

/**
 * mainLayout
 *  -Navbar
 *      -Logo (Align left)
 *      -Help
 *      -Contact
 *      -Cart
 *
 *  -Body
 *      - Cards
 *          -img
 *          -cuisines
 *          -delivery time
 *          -ratings
 *  -Footer
 *      -
 * 
 * working with Config Driven data
 */

const restaurantList = [
    {
        info: {
            id: "421568",
            name: "Pizza Hut",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/6c6ade26-32cb-4227-bf8c-b3fe09b294f1_421568.jpg",
            locality: "Ashwath infotech Building",
            areaName: "Central Solapur",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.1,
            parentId: "721",
            avgRatingString: "4.1",
            totalRatingsString: "1.9K+",
            sla: {
                deliveryTime: 19,
                lastMileTravel: 0.3,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "0.3 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-16 01:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/pizza-hut-ashwath-infotech-building-central-solapur-rest421568",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "782594",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
            locality: "Civil Lines",
            areaName: "Hotgi Road",
            costForTwo: "₹200 for two",
            cuisines: ["Waffle", "Desserts", "Ice Cream"],
            avgRating: 4.8,
            veg: true,
            parentId: "2233",
            avgRatingString: "4.8",
            totalRatingsString: "63",
            sla: {
                deliveryTime: 29,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-15 23:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/the-belgian-waffle-co-civil-lines-hotgi-road-rest782594",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "655335",
            name: "KFC",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d60f4388-dc67-4a94-a186-b4631d5819c4_655335.JPG",
            locality: "Keshav Nagra",
            areaName: "Central Solapur",
            costForTwo: "₹400 for two",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.3,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "778",
            sla: {
                deliveryTime: 11,
                lastMileTravel: 1,
                serviceability: "SERVICEABLE",
                slaString: "10-15 mins",
                lastMileTravelString: "1.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-15 23:00:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                        description: "bolt!",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/kfc-keshav-nagra-central-solapur-rest655335",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "97204",
            name: "Domino's Pizza",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/d376d6b8-1b9f-40ed-9e69-096d02414044_97204.jpg",
            locality: "Saat Rasta Collector Office Road",
            areaName: "Solapur Locality",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.1,
            parentId: "2456",
            avgRatingString: "4.1",
            totalRatingsString: "2.0K+",
            sla: {
                deliveryTime: 25,
                lastMileTravel: 1,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.0 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-16 02:59:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹1199",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/dominos-pizza-saat-rasta-collector-office-road-solapur-locality-rest97204",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "347887",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            locality: "Vikas Nagar",
            areaName: "Central Solapur",
            costForTwo: "₹450 for two",
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.5,
            veg: true,
            parentId: "5588",
            avgRatingString: "4.5",
            totalRatingsString: "319",
            sla: {
                deliveryTime: 13,
                lastMileTravel: 1.7,
                serviceability: "SERVICEABLE",
                slaString: "10-15 mins",
                lastMileTravelString: "1.7 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-15 23:30:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                        description: "bolt!",
                    },
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "bolt!",
                                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                                },
                            },
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "40% OFF",
                subHeader: "UPTO ₹80",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/baskin-robbins-ice-cream-desserts-vikas-nagar-central-solapur-rest347887",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "103299",
            name: "The Only Place",
            cloudinaryImageId: "rk81lho32n7yr3ehcuka",
            locality: "Ramlal Chowk",
            areaName: "Ramlal Chowk",
            costForTwo: "₹250 for two",
            cuisines: [
                "Biryani",
                "Chinese",
                "Kebabs",
                "Maharashtrian",
                "Hyderabadi",
                "Indian",
                "Punjabi",
                "Mughlai",
            ],
            avgRating: 4,
            parentId: "21016",
            avgRatingString: "4.0",
            totalRatingsString: "4.7K+",
            sla: {
                deliveryTime: 32,
                lastMileTravel: 1.9,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "1.9 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-16 00:00:00",
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/the-only-place-ramlal-chowk-rest103299",
            type: "WEBLINK",
        },
    },
    {
        info: {
            id: "103147",
            name: "Hotel Ajinkya",
            cloudinaryImageId: "q8pxp0dux08vizaq6c0o",
            locality: "Lucky Chowk",
            areaName: "Sidheshwar Temple Area",
            costForTwo: "₹300 for two",
            cuisines: [
                "Maharashtrian",
                "Chinese",
                "Mughlai",
                "Pizzas",
                "Fast Food",
                "Beverages",
            ],
            avgRating: 4.4,
            veg: true,
            parentId: "97777",
            avgRatingString: "4.4",
            totalRatingsString: "9.4K+",
            sla: {
                deliveryTime: 21,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
                nextCloseTime: "2024-12-15 23:30:00",
                opened: true,
            },
            badges: {
                imageBadges: [
                    {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                    },
                ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
                entityBadges: {
                    imageBased: {
                        badgeObject: [
                            {
                                attributes: {
                                    description: "pureveg",
                                    imageId: "v1695133679/badges/Pure_Veg111.png",
                                },
                            },
                        ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: "₹125 OFF",
                subHeader: "ABOVE ₹249",
                discountTag: "FLAT DEAL",
            },
            differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
                aggregatedRating: {
                    rating: "--",
                },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {
            context: "seo-data-1aac1b59-48f3-4af9-b994-cf3ae049cef0",
        },
        cta: {
            link: "https://www.swiggy.com/city/solapur/hotel-ajinkya-lucky-chowk-sidheshwar-temple-area-rest103147",
            type: "WEBLINK",
        },
    },
];

// const Heading2 = () => {
//     return (
//         <div>
//             <h1>Hello world 2</h1>
//             <h2>My Name is Shripad</h2>
//         </div>
//     );
// };

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Body />
        </>
    )
};

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <a href="/" className="logo-wrapper">
                <img
                    className="logo"
                    src="https://images.squarespace-cdn.com/content/v1/5ef15be0ddbf393489faa41b/1592957362496-TLELSLDWHHSV9RHHTS3O/Hungry-logo-PS-01.png"
                />
            </a>
            <ul>
                <li>Help</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

const RestaurantCard = ({cloudinaryImageId, name, cuisines}) => {
    
    return (
        <div className="card">
            <div className="banner-image-wrapper">
                <img className="banner-image" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
}

const CategoryTitle = () => {
    return <h2 className="category-title">Top restaurant chains in Solapur</h2>
}

const Body = () => {
    return (
        <div className="body-wrapper">
            <CategoryTitle />
            <div className="card-wrapper">
                {
                    restaurantList.map((res) => {
                        return <RestaurantCard {...res.info} key={res.info.id}/>
                    })
                }
                
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainLayout />);
