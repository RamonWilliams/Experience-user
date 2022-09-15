import React from 'react'

const OtherInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div>


      <label htmlFor="avatar">Avatar:</label>
     <input type="file" id="avatar" name="avatar" placeholder="Sube tu avatar" onChange={handleInput} value={user.avatar ? user.avatar : ''}  />
      

      <label htmlFor="nationality">Nacionalidad:</label>
      <input nationality="text" id="nationality" name="nationality"  placeholder="Nacionalidad" onChange={handleInput} value={user.nationality? user.nationality : ''}  />
      

    </div>
  )
}

export default OtherInfo