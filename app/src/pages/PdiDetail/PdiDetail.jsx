import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./PdiDetail.css"
import Geolocation from '../../components/MarkersMap/Geolocation';


const PdiDetail = () => {
    const { id } = useParams();
    const [ pdi, setPdi ] = useState([]);
  

    const getPdi = async() => {
        API.get(`/pdi/${id}`).then(( res )=> {
            setPdi( res.data.data)
          
        })
    }
  
    
    useEffect( () => {
        getPdi();
        
    }, [])   
           
    return (
       <>
        <figure className='detailP'>
          <div className='conteinerInfoP'>
                <div className='imageDetailP'>  
                 <img src={ pdi.image } alt={ pdi.name } />
                </div>  
                <div className='descriptionP'>
                    <h2>  { pdi.name } </h2>
                    <h3>  { pdi.type } </h3>
                    <p>  {pdi.description}</p>
                    <p>  { pdi.address} </p>         
                  <div className='priceP'> 
                    <p>{pdi.price} €</p>     
                  </div>      
                </div> 
            </div>  
        </figure>        
        <div className='mapa'>
         {pdi.name && pdi.lat && pdi.lng?( <Geolocation geolocationValues={pdi}/>):(<p>No hay</p>)}
         
         
        </div>
        </>

      )
}

export default PdiDetail