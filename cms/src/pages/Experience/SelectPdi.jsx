import React from 'react'

const SelectPdi = ({ pdi, handleExperience }) => {
  return (
    <div>
      <h2>Selecciona los PDIS Asociados ⚡️</h2>
      {pdi.map((pdi) => (
        <div key={pdi._id}>
          <p>{pdi.name}</p>
          <p>{pdi.address}</p>
          <p>{pdi.price}</p>
          <input type="checkbox" name="pdi" id={pdi._id} value={pdi._id} onChange={handleExperience} />
        </div>
      ))}

    </div>
  )
}

export default SelectPdi