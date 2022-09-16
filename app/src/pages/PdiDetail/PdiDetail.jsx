import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./PdiDetail.css"

const PdiDetail = () => {

    const { id } = useParams();

    const [ pdi, setPdi ] = useState([]);

    const getPdi = async() => {
        API.get(`/pdi/${id}`).then(( res )=> {
            setPdi( res.data.data)
            console.log(res.data.data)
        })
    }

    useEffect( () => {
        getPdi();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2> Nombre: { pdi.name } </h2>
        <h2> Tipo: { pdi.type } </h2>
        <p> Descripción: {pdi.description}</p>
        <h3> Direccón: { pdi.address} </h3>      
        <p> Precio: {pdi.price}</p>      
      
        </div> 

        <div className='lado atras'> 
        <img src={ pdi.image } alt={ pdi.name } />
        </div>
        

        </div>
    </div>
  )
}

export default PdiDetail