import React from "react"
import "./ExperienceCard.css";
import { Link } from "react-router-dom";


const ExperienceCard = ({ experience }) => {

  return (
    <Link to={`/experience/${experience._id}`}>
    <figure className="a-box">
      <div className="img-container"> 

        <div className="img-inner">

            <div className="inner-skew">
            <img className="card_image" src={experience.image} alt={experience.name} />
            <h4 className="name">{experience.name}</h4>  
            <p>{experience.puntuation}</p>   
        
   
            </div>

        </div>
      
      </div>
        
        <div className="text-container">

          <h3>{experience.name}</h3> 
          <p>Precio:{experience.price}</p>
        </div>
         <div>
           
         </div>
        
        
    </figure>
</Link>
  );
};

export default ExperienceCard;



  
   