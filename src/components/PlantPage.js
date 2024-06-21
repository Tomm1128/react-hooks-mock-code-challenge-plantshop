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

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantList={plants} />
    </main>
  )
}

export default PlantPage
