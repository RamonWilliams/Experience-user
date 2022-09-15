import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className='principal-section'>
      <h1>CMS EXPERIENCE LAND 💻</h1>
      <div>
        <h2>Experienceland 🚀</h2>
        <Link to="/new-experience"><button>Nueva experiencia 🧳</button></Link>
        <Link to="/experiences"><button>Ver experiencias 🧳</button></Link>
      </div>
      <div>
        <h2>PDIs 🕌</h2>
        <Link to="/new-pdi"><button>Nuevo PDI 🕌</button></Link>
        <Link to="/pdis"><button>Ver PDIs 🕌</button></Link>
      </div>
    </section>
  );
};

export default Home;