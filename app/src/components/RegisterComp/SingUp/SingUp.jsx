import React from 'react'


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
                 


                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="escribe tu contraseña" onChange={handleInput} value={user.password ? user.password : ''} />
                



                 <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  placeholder="escribe tu email" onChange={handleInput} value={user.email ? user.email : ''}  />
                



    </div>
  )
}

export default SingUp