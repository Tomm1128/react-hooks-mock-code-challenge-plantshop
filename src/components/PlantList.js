import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantList }) {
  const plantCards = plantList.map((plant) => {
    return <PlantCard plant={plant} />
  })
  return <ul className="cards">{plantCards}</ul>
}

export default PlantList
