import React from "react"
import "./PdiCard.css";
import { Link } from "react-router-dom";


const PdiCard = ({ pdi }) => {

  return (
    <figure className="cartaPdi">
    <Link to={`/pdi/${pdi._id}`}>
        <figure className="a-box">
  <div className="img-container">
    <div className="img-inner">
        <div className="inner-skew">
          <img className="card_image" src={pdi.image} alt={pdi.name} />
          <h4 className="name">{pdi.name}</h4>  
        <p>{pdi.puntuation}</p>  
        </div>
    </div>
  </div>  
  <div className="text-container-2">
    <h3>{pdi.name}</h3> 
    <p>Precio:{pdi.price}</p>
  </div>
   <div>
     
   </div>
  
  
</figure>
    </Link>
    </figure>
  );
};

export default PdiCard;