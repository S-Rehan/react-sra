import RestaurantCard from "./RestauranCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8873875&lng=77.59688659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        

        console.log(json);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <input 
                  type="text" 
                  className="search" 
                  value={searchText} 
                  onChange={(e) => {
                      setSearchText(e.target.value);
                  }}
                />
                <button 
                  className="search-btn" 
                  onClick={() => {
                    console.log("Button Clicked!"); // Step 1: Confirm click
                    // Filter the restraunt cards and update the UI
                    // searchText
                    console.log(searchText);

                    

                   const filteredRestaurant = listOfRestaurants.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );

                   setFilteredRestaurants(filteredRestaurant);
                }}
                >
                    Search
                </button>
                <button className="filter-btn" 
                 onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setFilteredRestaurants(filteredList);
                }}
                >
                    Most Rated Restaurants
                </button>
            </div>
               <div className="container">
                  <div className="restaurant-container">
                      {filteredRestaurants.map((restaurant) => (
                         <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        ))}
                  </div>
               </div>
        </div>
    );
};

export default Body;