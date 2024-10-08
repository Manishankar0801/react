import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_GET_API, SWIGGY_POST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   
    // const data = await fetch(SWIGGY_POST_API, payload);
    const data = await fetch(SWIGGY_GET_API);
    const jsonData = await data.json();
    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };


  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) {
    return <h1>Looks Like your are offline!!! Please check your internet connection</h1>
  }

  //   if (!listOfRestaurants.length) {
  //     return <Shimmer />;
  //   }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setSearchText(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant
          .sort((a, b) => b.info.id - a.info.id)
          .map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} ><RestaurantCard resData={restaurant} /></Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
