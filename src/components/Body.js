import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import {Link} from 'react-router-dom'

const CategoryTitle = () => {
  return <h2 className="category-title">Top restaurant chains in Solapur</h2>;
};

//Filter Restaurants
function filterRestaurants(inputValue, allRestaurants) {
  return allRestaurants.filter(res => res?.info?.name?.toLowerCase().includes(inputValue.toLowerCase()));
}


const Body = () => {
  const [inputValue, setInputValue] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);


  function handleClearSearch() {
    setInputValue("");
    return setfilteredRestaurants(allRestaurants);
  }

  function handleSearchClick() {
    const data = filterRestaurants(inputValue, allRestaurants);
    return setfilteredRestaurants(data);
  }

  useEffect(() => {
    getRestaurantList();

  }, []);

  async function getRestaurantList() {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6599188&lng=75.9063906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
        method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
    });

    const json = await data.json();

    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0) return (
    <div className="empty-search-wrapper">
      <h3 className="">No restaurants found</h3>
      <button className="clear-search-btn" onClick={handleClearSearch}>Clear search</button>
    </div>
  )

  return allRestaurants?.length === 0 ? (<Shimmer />) : (
    <div className="body-wrapper">
        <div className="main-search-wrapper">
          <div className="input-button-wrap">
            <input
              className="search-input"
              type="text"
              value={inputValue}
              placeholder="Search Restaurant"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="search-button" onClick={() => { handleSearchClick() }}>
              Search
            </button>
          </div>
        </div>
      <div>
        <CategoryTitle />
        <div className="card-wrapper">
          {filteredRestaurants.map((res) => {
            return (
              <Link to={"/restaurant/" + res?.info?.id}  key={res?.info?.id}>
                <RestaurantCard {...res?.info} />
              </Link>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
