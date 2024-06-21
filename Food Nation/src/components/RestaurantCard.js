import React from "react";
import { IMG_CON_URL } from "../config";

const ResturantCard = ({ avgRating, cloudinaryImageId, cuisines, name }) => {
  return (
    <div className="card">
      <img src={IMG_CON_URL + cloudinaryImageId} height={150}/>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default ResturantCard;