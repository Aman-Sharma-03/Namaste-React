import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CON_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // Reading dynamic param URL
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);

    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
      (ele) => {
        setDishes((oldArray) => [...oldArray, ele.card.info]);
      }
    );
  }

  console.log(dishes);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CON_URL +
            restaurant?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
          height={300}
          width={300}
        />
        <h3>{restaurant?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.data?.cards[2]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.data?.cards[2]?.card?.card?.info?.areaName}</h3>
      </div>
      <div className="menu-list">
        <h1 style={{fontSize: 30}}>Menu</h1>
        <ul>
          {
            dishes.map((ele) => {
              return <h1>{ele.name}</h1>;
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
