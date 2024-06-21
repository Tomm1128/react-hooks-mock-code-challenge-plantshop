import React, { useState } from "react"

function PlantCard({ plant: { name, image, price } }) {
  const [inStock, setStock] = useState(true)

  const updateStock = () => setStock(!inStock)

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={updateStock}>
          In Stock
        </button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
