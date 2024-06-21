const url = "http://localhost:6001/plants"

const getPlants = () => {
  return fetch(url).then((resp) => resp.json())
}

const createPlant = (newPlant) => {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  }).then((resp) => resp.json())
}

export { getPlants, createPlant }
