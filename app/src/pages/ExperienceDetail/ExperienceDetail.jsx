import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./ExperienceDetail.css"
import Pdi from '../Pdi/Pdi';

const ExperienceDetail = () => {

    const { id } = useParams();
    const [ experience, setExperience ] = useState({});
    const [ pdis, setPdis ] = useState([]);
   

    const getExperience = async() => {
        API.get(`/experience/${id}`).then(( res )=> {
            setExperience( res.data.data)
         
          return  res.data.data

        }).then(( res ) => {
            const experiencePdis = res.pdis;
            if ( experiencePdis.length){
              if ( experiencePdis.length === 1 ) {
                getExperiencePdi(experiencePdis[0]._id ) 
              }

             else {
                getPdis(experiencePdis)
            }
            }
           
    }).catch(( err ) => {
        console.log(err)
    })
};

 const getExperiencePdi = async ( idPdi) => {
API.get(`/pdi/${idPdi}`).then(( res )=> {
setPdis(res.data.data)
 })}
 const getPdis = async (experiencePdis) => {
    API.get("/pdi").then(( res )=> {
      filterPdis(res.data.data, experiencePdis)
    })
 }
 const filterPdis = (allPdis, experiencePdis) => 
       {
        
        const filteredPdis = []
      allPdis.forEach(pdi => {
        experiencePdis.forEach(experiencePdi => {
          if ( experiencePdi._id === pdi._id ) {
            filteredPdis.push(pdi)
          }
        })

        
      });
      setPdis(filteredPdis)
       }

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
        <div className='pdi'>
         {pdis.length ? pdis.map((pdi, index)=> <div key={index}> <h2>{pdi.name} </h2> </div> ): null}
         
        </div> 
        <div className='lado atras'> 
        <img src={ experience.image } alt={ experience.name } />
        </div>
        

        </div>


    </div>  


 
  )
}

export default ExperienceDetail