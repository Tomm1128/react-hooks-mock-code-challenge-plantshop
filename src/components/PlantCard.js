import React, { useState } from "react"

function PlantCard({ plant: { name, image, price } }) {
  const [inStock, setStock] = useState(true)
  const [isHidden, setHidden] = useState(true)
  const [newPrice, setNewPrice] = useState(0)

  const updateStock = () => setStock(!inStock)
  const showEditPrice = () => setHidden(!isHidden)

  const updatePrice = (event) => {
    showEditPrice()
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <input
        type="number"
        step="0.01"
        placeholder="Update Price..."
        hidden={isHidden}
        value={newPrice}
        onChange={(event) => setNewPrice(event.target.value)}
      ></input>
      {inStock ? (
        <button className="primary" onClick={updateStock}>
          In Stock
        </button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}
      {isHidden ? (
        <button onClick={showEditPrice}>Update Price</button>
      ) : (
        <button onClick={updatePrice}>Save Price</button>
      )}
    </li>
  )
}

export default PlantCard
