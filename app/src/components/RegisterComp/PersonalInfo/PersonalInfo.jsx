import React from 'react'

const PersonalInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div>
    
 
      <label htmlFor="location">Localidad:</label>
                <input type="text" id="location" name="location"  placeholder="Localidad" onChange={handleInput} value={user.location ? user.location : ''} /> 


                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" name="address"  placeholder="Dirección" onChange={handleInput} value={user.address ? user.address : ''}  
                /> 


                <label htmlFor="phone">Teléfono:</label>
                <input type="text" id="phone" name="phone"  placeholder="Teléfono" onChange={handleInput} value={user.phone ? user.phone: ''} 
                 /> 


                <label htmlFor="description">Descripción :</label>
                <input type="text" id="description" name="description"  placeholder="Descripción" onChange={handleInput} value={user.description ? user.description : ''} 
                /> 


    </div>
  )
}

export default PersonalInfo