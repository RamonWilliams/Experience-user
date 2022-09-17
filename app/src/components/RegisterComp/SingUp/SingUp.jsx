import React from 'react'
import "./SingUp.css"

const SingUp = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div>
          <label htmlFor="fullname">Nombre completo:</label>
          <input type="text" id="fullname" name="fullname" placeholder="Nombre completo"  onChange={handleInput} value={user.fullname ? user.fullname : ''}  />
               
          <label htmlFor="username">Nombre de usuario:</label>
          <input type="text" id="username" name="username"  placeholder="Nombre de usuario" onChange={handleInput} value={user.username ? user.username : ''}  />
    </div>
  )
}

export default SingUp