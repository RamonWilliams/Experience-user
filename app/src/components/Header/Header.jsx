import React from 'react'
import "./Header.css"
import { Link, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import Home from '../../pages/Home/Home';
import Experience from '../../pages/Experience/Experience';
import Pdi from '../../pages/Pdi/Pdi';





const Header = () => {

  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();

  

return (
<header>
<img src="../../../public/images/Logo.jpg" alt="Logo" />

    {/* { <Home/>?(<input type="text" className='input-header'/> === false ) : (null)} */}

    
   
  <ul className='header'>    
    
  <Link to="/"> <li> <button>Home</button> </li> </Link>

  {user?( <><li>
      <Link to="/experience"> 
          <button> Experiencias </button> 
       </Link>
    </li> </>):(null)}

    {user?( <><li>
     <Link to="/profile"> <button>Perfil</button> </Link>
    </li></>):null }
    
    {user ?(<>
    {user.avatar !== "undefined" ? ( <img src={user?.avatar} alt="Avatar"/> 
    ) : null}
       <div>
         <button onClick={() => logout() & navigate("/")}>Logout</button> 
       </div>
    </>)
  : (
    <ul>
       <li>
     <Link to="/login"> <button>Login</button></Link>
    </li>       

    <li>
    <Link to="/register" ><button>Regístrate</button></Link>
    </li>

       </ul>
  )  
  }
    
     
    
    <li>
      <Link to="/pdi"> 
          <button> Puntos de Interés </button> 
       </Link>
    </li>   

  </ul>
</header>
  )
}

export default Header