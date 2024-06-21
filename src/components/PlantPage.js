import React, { useState, useEffect } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"
import { getPlants, createPlant } from "../utils/fetchers"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getPlants().then((plantList) => setPlants(plantList))
  }, [])

  const addPlant = (newPlant) => {
    createPlant(newPlant).then((createdPlant) =>
      setPlants([...plants, createdPlant])
    )
  }

  const editPlant = (updatedData) => {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === updatedData.id) {
        return updatedData
      } else {
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  const filteredPlants = plants.filter((plant) => {
    return search === "" ? true : plant.name.toLowerCase().includes(search)
  })

  return (
    <main>
      <NewPlantForm submitPlant={addPlant} />
      <Search searchInput={search} onSearch={setSearch} />
      <PlantList plantList={filteredPlants} onUpdate={editPlant} />
    </main>
  )
}

export default PlantPage
