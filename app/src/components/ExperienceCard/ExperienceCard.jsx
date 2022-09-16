import React from "react"
import "./ExperienceCard.css";
import { Link } from "react-router-dom";


const ExperienceCard = ({ experience }) => {

  return (
    <Link to={`/experience/${experience._id}`}>
        <figure className="Experience-card">
            <img className="card_image" src={experience.image} alt={experience.name} />
            <h4 className="name">{experience.name}</h4>  
            <p>{experience.puntuation}</p>   
        </figure>
    </Link>
  );
};

export default ExperienceCard;