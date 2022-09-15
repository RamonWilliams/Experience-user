import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./TravelDetail.css"

const TravelDetail = () => {

    const { id } = useParams();

    const [ travel, setTravel ] = useState([]);

    const getTravel = async() => {
        API.get(`/travel/${id}`).then(( res )=> {
            setTravel( res.data.data.travel)
            console.log(res.data.data.travel)
        })
    }

    useEffect( () => {
        getTravel();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2> Título: { travel.title } </h2>
        <h3> País: { travel.country} </h3>
        <p> Ciudad: { travel.city } </p>
        <p> Fecha: { travel.date } </p>   
        <p> Precio: {travel.price}</p>
        <p>Puntuación{travel.puntuation}</p>
        <p>Descripción: {travel.description}</p>
        <p>Like: {travel.likes}</p>    
        </div> 

        <div className='lado atras'> 
        <img src={ travel.image } alt={ travel.title } />
        </div>
        

        </div>
    </div>
  )
}

export default TravelDetail