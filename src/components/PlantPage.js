import React, { useState, useEffect } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"
import { getPlants } from "../utils/fetchers"

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    getPlants().then((plantList) => setPlants(plantList))
  }, [])

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm submitPlant={addPlant} />
      <Search />
      <PlantList plantList={plants} />
    </main>
  )
}

export default PlantPage
