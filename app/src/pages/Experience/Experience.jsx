import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

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
    <section>
      <input type="text" className='input-pdi'/> 
      {allExperiences.length ? allExperiences.map((experience) => <ExperienceCard experience={experience} key={experience._id}
      />) : <p>Loading Experience... </p>}

    </section>

  )





}

export default Experience