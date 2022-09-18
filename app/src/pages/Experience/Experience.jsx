import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import "./Experience.css"


const Experience = () => {
  const [allExperiences, setAllExperiences] = useState([]);


  const getAllExperiences = async () => {
    API.get("/experience").then((res) => {
      setAllExperiences(res.data.data);
      console.log(allExperiences)
    });
  };

  useEffect(() => {
    getAllExperiences();
  }, []);


  return (
    <section className='general-experience'>         
      <div className='div-card'>  
      {allExperiences.length ? allExperiences.map((experience) => <ExperienceCard experience={experience} key={experience._id}
      />) : <p>Loading Experience... </p>}
         </div>
        
    </section>

  )
   




}

export default Experience