import React from "react"
import "./TravelCard.css";
import { Link } from "react-router-dom";


const TravelCard = ({ travel }) => {

  return (
    <Link to={`/travel/${travel._id}`}>
        <figure className="Travelcard">
            <img className="card_image" src={travel.image} alt={travel.title} />
            <h4 className="name">{travel.title}</h4>  
            <p>{travel.puntuation}</p>   
        </figure>
    </Link>
  );
};

export default TravelCard;