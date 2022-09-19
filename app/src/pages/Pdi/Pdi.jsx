import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import PdiCard from '../../components/PdiCard/PdiCard';
import { Link } from 'react-router-dom';
import "./Pdi.css"
import Loader from '../../components/Loader/Loader';

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
      {allPdis.length ? allPdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id}
      />) :<p>Loading...</p>}
    </section>
  )
}

export default Pdi