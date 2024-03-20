
import React, { useEffect, useState, useContext } from "react";
import { Cart } from "../Components/Cart.js";
import { Link } from "react-router-dom";
import { Shimmer } from "../Components/Shimmer.js";
import { useOnline } from "../Utilis/useOnline.js";
import UserContext from "../Utilis/userContext.js";

function filterData(searchText, restaurants) {

    const filterData = restaurants.filter((restaurant) =>
        restaurant.info.name.includes(searchText)
    );
    console.log(filterData);
    return filterData;
}

export const Body = () => {
    const { user, setUser } = useContext(UserContext)
    const [restaurants, setRestaurants] = useState([]);
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("hj");
    useEffect(() => {
        getRestaurants();
    }, [])
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info?.name);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    const isOnline = useOnline();
    console.log(isOnline + "Online");
    if (isOnline === false) return <h1>opps you are offline</h1>
    console.log("render");
    return restaurants.length === 0 ? (<Shimmer />) : (
        <>
            <input type="text" placeholder="type" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }} className="border-2 border-rose-600" />
            <button className="hover:bg-violet-600 border-4 border-indigo-500/100 " onClick={() => {

                const data = filterData(searchText, AllRestaurants);
                console.log(data);
                setRestaurants(data);
            }}>click</button>
            <input type="text" value={user.email} onChange={(e) => { setUser({ name: e.target.value, email: e.target.value }) }} />
            <button>usercontext  </button>
            <div className="flex flex-wrap border-black">


                {restaurants.map((restaurant, index) => {

                    return (<Link to={"/restaurant/" + restaurant?.info.id} key={index}><Cart restaurant={restaurant} /></Link>)
                })}


            </div>
        </>
    )
}