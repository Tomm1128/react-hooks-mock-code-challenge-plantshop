import React, { useState } from "react"
import { updatePlant, deletePlant } from "../utils/fetchers"

function PlantCard({ plant: { id, name, image, price }, onUpdate, onDelete }) {
  const [inStock, setStock] = useState(true)
  const [isHidden, setHidden] = useState(true)
  const [newPrice, setNewPrice] = useState(0)

  const updateStock = () => setStock(!inStock)
  const showEditPrice = () => setHidden(!isHidden)

  const updatePrice = (event) => {
    const priceInput = {
      price: Number(newPrice),
    }
    updatePlant(priceInput, id).then((updatedPlant) => onUpdate(updatedPlant))
    showEditPrice()
  }

  const handleDelete = () => {
    deletePlant(id).then(() => onDelete(id))
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
      <button id="delete-btn" onClick={handleDelete}>
        🗑️
      </button>
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
