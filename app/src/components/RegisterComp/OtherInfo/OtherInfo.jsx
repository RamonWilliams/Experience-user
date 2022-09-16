import React from 'react'

const OtherInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div>


      <label htmlFor="avatar">Avatar:</label>
     <input type="file" id="avatar" name="avatar" placeholder="Sube tu avatar" onChange={handleInput} value={user.avatar ? user.avatar : ''}  />
      

     <label htmlFor="description">Descripción :</label>
     <input type="text" id="description" name="description"  placeholder="Descripción" onChange={handleInput} value={user.description ? user.description : ''}  /> 

    </div>
  )
}

export default OtherInfo