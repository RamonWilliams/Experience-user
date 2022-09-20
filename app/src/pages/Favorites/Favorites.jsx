import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { JwtContext } from '../../context/jwtContext';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState([]);
    const {user} = useContext(JwtContext)
    const { username } = useParams();


    const getAllFavorites = async () => {
      API.get(`${user}/${username}`).then((res) => {
          console.log(res)
        setAllFavorites(res.data.data.favoriteExperience);      
      });
     
    };
  
       
  
    useEffect(() => {
      getAllFavorites();
    }, []);


   return(

    <section className='pdi'>         
    {allFavorites.length ? allFavorites.map((favorite) => <ExperienceCard favorite={favorite} key={favorite}/>) :<p>Loading...</p>}
  </section>
   )
  
  
   
  
  
    
}

export default Favorites