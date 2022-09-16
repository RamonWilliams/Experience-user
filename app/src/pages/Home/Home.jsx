import React from 'react'
import "./Home.css"

const Home = () => {
  return (

    <section className='home'>
      <div className="parallax">
        <div className='parallax-inner'>
         <h2>Tómate la diversión en serio. Haz tiempo en tu vida para el disfrute. Haz algo divertido y emocionante.</h2>
        </div>   
      </div> 
      <h1>Descubre Experiencias Increíbles</h1>
      
      <div className='gallery' >
       
          <div className='photo-2'>           
            <img src="../../../public/galería/galería10.jpg" alt="Photo10" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería11.jpg" alt="Photo11" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería12.jpg" alt="Photo12" />
          </div>
       
          <div className='photo'>
            <img src="../../../public/images/Logo2.jpg" alt="Photo4" />
          </div>
          <div className='photo'>
            <img src="../../../public/galería/galería5.jpg" alt="Photo5" />
          </div>
          <div className='photo-2'>
          <img src="../../../public/galería/galería1.jpg" alt="Photo1" />
          </div>    
      </div>
    </section>
   

  )
}

export default Home