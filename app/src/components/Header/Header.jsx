import React from 'react'
import "./Header.css"
import { Link, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";





const Header = () => {

  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();

return (
<header>
<img src="https://img2.freepng.es/20190420/uxl/kisspng-travel-agent-destination-travel-world-package-tour-5cbb1818bdafd8.510190491555765272777.jpg" alt="" />

<input type="text"/>

  <ul className='header'>
   
   
    
    <li>
     <Link to="/login"> <button>Login</button></Link>
    </li>

    <li>
     <Link to="/profile"> <button>Perfil</button> </Link>
    </li>

    <li>
    <Link to="/register" ><button>Regístrate</button></Link>
    </li>

    <li>
     <Link to="/"> <button>Logout</button> </Link>
    </li>

    <li>
      <Link to="/travel"> 
          <button> Viajes </button> 
       </Link>
    </li>

    <li>
      <Link to="/hoteles"> 
          <button> Hoteles </button> 
       </Link>
    </li>

    
    <li>
      <Link to="/restaurants"> 
          <button> Restaurantes </button> 
       </Link>
    </li>

    <li>
      <Link to="/pdis"> 
          <button> Puntos de Interés </button> 
       </Link>
    </li>

  </ul>
</header>
  )
}

export default Header