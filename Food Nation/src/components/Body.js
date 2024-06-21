import React, { useEffect, useState } from "react";
import { restaurantlist } from "../config";
import ResturantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

// What is state
// What is Hooks? - hook is just a normal function
// What is useState?


function filterData(searchTxt, restaurants){
  const filterData = restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
  return filterData;
}

// Loads => API => renderPage
// Loads => render Something => API => update UI - useEffect hook

const Body = () => {
  // component re-render when the state changes or props changes

  // const searchTxt = "KFC";
  // If somebody changes this variable react would not know that it has to change the dom

  // State varaibles are used to keep the dom in sync with the local variables

  // React uses Two way data binding

  // searchTxt is a local state variable

  const [searchTxt, setSearchTxt] = useState(""); // To create state variable
  const [allRestaurant, setAllRestaurant] = useState(restaurantlist);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    // API Call inside useEffect
    getRestaurants();
  }, []);

  // useEffect is called after render - so we can make a API call inside useEffect
  // empty dependency array => once after render
  // dep array => called after every re-render

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      if (response.statusCode == 1) {
        throw new Error(`HTTP error! Couldn't fetch data`);
      }
      setAllRestaurant(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }



  // Conditional Rendering
  // If restaurant is empty => Shimmer UI
  // If restaurant has data => actual data UI

  // Avoid Rendering a component
  // Early return 
  if(!allRestaurant)  return null;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchTxt, allRestaurant);
            // update the state - restaurant variable
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants?.length == 0 ? (
          <h1>No Resturant Found</h1>
        ) : (
          filterRestaurants?.map((restaurant) => {
            return (
              <ResturantCard {...restaurant?.info} key={restaurant?.info?.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;





// Monolithic Architecture - Big app, all the functionality inside one app 

// Microservice Architecture - Different app for different functionality for example- UI, Logs, Backend API, Notification, auth all run on different ports 
//    Advantages:
        // - Seperation of concern (functionality don't interfere with one other)
        //  these projects run on different ports and these ports are linked together 


