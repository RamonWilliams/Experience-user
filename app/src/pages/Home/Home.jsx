import React from 'react'
import "./Home.css"

const Home = () => {
  return (

    <section className='home'>
      <div className="parallax">
        <div className='parallax-inner'>
        <h2>Da un paso atrás, evalúa lo que es importante, y disfruta de la vida, ninguna persona es un fracaso si disfruta de la vida.</h2>
        </div>   
      </div> 
      
      <div className='gallery' >
       
          <div className='photo-2'>
            <img src="../../../public/galería/galería1.jpg" alt="Photo1" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería2.jpg" alt="Photo2" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería3.jpg" alt="Photo3" />
          </div>
       
          <div className='photo'>
            <img src="../../../public/images/Logo2.jpg" alt="Photo4" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería5.jpg" alt="Photo5" />
          </div>
          <div className='photo-2'>
           <img src="../../../public/galería/galería8.jpg" alt="Photo8" />
          </div>    
      </div>
    </section>
   

  )
}

export default Home