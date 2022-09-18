import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./ExperienceDetail.css"
import PdiCard from '../../components/PdiCard/PdiCard';


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
            setExperience( res.data.data)         
            setPdis(res.data.data.pdis)         

        }).catch(( err ) => {
        console.log(err)
    })
};


 const getExperiencePdi = async ( idPdi) => {
API.get(`/pdi/${idPdi}`).then(( res )=> {
setPdis([res.data.data])
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

    <>
    <figure className='detail'>
        <div className='conteinerInfo'>
          <div className='imageDetail'> 
            <img src={ experience.image } alt={ experience.name } />
          </div>
          <div className='description'>
            <h2>  { experience.name } </h2>
            <h3>  { experience.location} </h3>
            <p> {experience.description}</p>
           <div className='price'>
            <p>  {experience.price} € </p>
            </div> 
          </div> 
         </div> 
      </figure>
             
    <div className='puntos'>
        <h2> Puntos de interés </h2>              
    
    </div>
      <div className='pdi'>
       {pdis.length ? pdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id} /> ): null}              
       
      </div>      

 
      </>

  );
}


 
  


export default ExperienceDetail
