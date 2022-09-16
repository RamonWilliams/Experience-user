import React from 'react'

const PersonalInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div>
    


                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="escribe tu contraseña" onChange={handleInput} value={user.password ? user.password : ''} />
                

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  placeholder="escribe tu email" onChange={handleInput} value={user.email ? user.email : ''}  />
                
            

               


    </div>
  )
}

export default PersonalInfo