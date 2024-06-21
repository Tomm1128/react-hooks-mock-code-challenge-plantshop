const url = "http://localhost:6001/plants"

const getPlants = () => {
  return fetch(url).then((resp) => resp.json())
}

export { getPlants }
