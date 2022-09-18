import React from "react"
import "./Pdi.css";
import { Link } from "react-router-dom";


const PdiCard = ({ pdi }) => {

  return (
    <Link to={`/pdi/${pdi._id}`}>
        <figure className="Pdicard">
            <img className="card_image" src={pdi.image} alt={pdi.name} />
            <h4 className="name">{pdi.name}</h4>  
            <p>{pdi.puntuation}</p>   
        </figure>
    </Link>
  );
};

export default PdiCard;