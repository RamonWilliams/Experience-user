import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./ExperienceDetail.css"
import Pdi from '../Pdi/Pdi';

const ExperienceDetail = () => {

    const { id } = useParams();
    const [ experience, setExperience ] = useState({});
   

    const getExperience = async() => {
        API.get(`/experience/${id}`).then(( res )=> {
            setExperience( res.data.data)
         
          
        })
       
    };
    // const [pdis] = experience;
    // console.log(pdis)


  
    useEffect( () => {
        getExperience();
      
    }, []);
     

    
   
    
    
   
   
  return (

   <div className='contenedor'>
       
        
                 
        <div className='carta'>  
        <div className='lado   frente'>
        <h2> Nombre: { experience.name } </h2>
        <h3> Localización: { experience.location} </h3>
        <p>Descripción: {experience.description}</p>
        <p> Precio: {experience.price}</p>
        <p> Puntos de interés: </p> 
       
       
            
     

      
        </div> 

        <div className='lado atras'> 
        <img src={ experience.image } alt={ experience.name } />
        </div>
        

        </div>
      

    </div>  


 
  )
}

export default ExperienceDetail