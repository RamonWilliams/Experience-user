import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import PdiCard from '../../components/PdiCard/PdiCard';
import { Link } from 'react-router-dom';
import "./Pdi.css"

const Pdi = () => {
  const [allPdis, setAllPdis] = useState([]);


  const getAllPdis = async () => {
    API.get("/pdi").then((res) => {
      setAllPdis(res.data.data);
      console.log(allPdis)
    });
  };

  useEffect(() => {
    getAllPdis();
  }, []);


  return (
    <section className='pdi'>
     
      <input type="text" className='input-pdi'/>
      <Link to="/pdi/create"> <p> Quieres crear tu Punto de interés</p>    </Link>
  
      {allPdis.length ? allPdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id}
      />) : <p>Loading Pdi... </p>}

    </section>

  )





}

export default Pdi