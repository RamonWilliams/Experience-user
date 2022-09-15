import React from "react"

import { Link } from "react-router-dom";


const RestaurantCard = ({ restaurant }) => {

  return (
    <Link to={`/restaurants/${restaurant._id}`}>
        <figure className="Restaurantcard">
            <img className="card_image" src={restaurant.image} alt={restaurant.name} />
            <h4 className="name">{restaurant.name}</h4>  
            <p>{restaurant.puntuation}</p>   
        </figure>
    </Link>
  );
};

export default RestaurantCard;