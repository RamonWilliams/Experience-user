import React from "react"
import "./HotelCard.css";
import { Link } from "react-router-dom";


const HotelCard = ({ hotel }) => {

  return (
    <Link to={`/hoteles/${hotel._id}`}>
        <figure className="Hotelcard">
            <img className="card_image" src={hotel.image} alt={hotel.name} />
            <h4 className="name">{hotel.name}</h4>  
            <p>{hotel.puntuation}</p>   
        </figure>
    </Link>
  );
};

export default HotelCard;