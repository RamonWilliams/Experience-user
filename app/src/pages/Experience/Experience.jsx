import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import TravelCard from '../../components/TravelCard/TravelCard';

const Experience = () => {
  const [allTravels, setAllTravels] = useState([]);


  const getAllTravels = async () => {
    API.get("/experience").then((res) => {
      setAllTravels(res.data.data);
      console.log(allTravels)
    });
  };

  useEffect(() => {
    getAllTravels();
  }, []);


  return (
    <section>

      {allTravels.length ? allTravels.map((travel) => <TravelCard travel={travel} key={travel._id}
      />) : <p>Loading Travel... </p>}

    </section>

  )





}

export default Experience