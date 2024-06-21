import React, { useState } from "react"

function NewPlantForm({ submitPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  })

  const updateFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={updateFormData}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={updateFormData}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={updateFormData}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
