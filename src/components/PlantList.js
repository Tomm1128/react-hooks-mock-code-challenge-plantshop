import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantList, onUpdate, onDelete }) {
  const plantCards = plantList.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    )
  })
  return <ul className="cards">{plantCards}</ul>
}

export default PlantList
