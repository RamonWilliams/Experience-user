
import React, { useEffect, useState, useContext } from 'react';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
const Favorites = () => {
    const [allFavorites, setAllFavorites] = useState([]);



    const getAllFavorites = () => {
     const userStorage = JSON.parse(localStorage.getItem("user"))
     const favorites = userStorage.favoriteExperience;
     setAllFavorites(favorites)
    };
  
       
  
    useEffect(() => {
      getAllFavorites();
    }, []);


   return(

    <section className='pdi'>         
    {allFavorites.length ? allFavorites.map((favorite) => <ExperienceCard experience={favorite} key={favorite._id}/>) :<p>Loading...</p>}
  </section>
   )
  
  
   
  
  
    
}

export default Favorites