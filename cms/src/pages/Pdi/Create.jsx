import React, { useState } from 'react'
import { API } from "../../services/API";

const Create = () => {
  const [pdi, setPdi] = useState({});

  const createPdi = () => {
    setPdi({});
    API.post(`/pdi/create`, pdi).then((res) => {
      //TODO: navigate to pdi page
    })
  }

  const handlePdi = (e) => {
    setPdi({ ...pdi, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="type">Type:</label>
          <input type="text" name="type" id="type" onChange={handlePdi} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={handlePdi} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description" onChange={handlePdi} />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input type="file" name="image" id="image" onChange={handlePdi} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" onChange={handlePdi} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" onChange={handlePdi} />
        </div>
        <button type="button" onClick={createPdi}>Nuevo PDI</button>
      </form>
    </>

  )
}

export default Create