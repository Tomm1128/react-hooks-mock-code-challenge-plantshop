const url = "http://localhost:6001/plants/"

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

const updatePlant = (updatedValue, id) => {
  return fetch(url + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedValue),
  }).then((resp) => resp.json())
}

const deletePlant = (id) => {
  return fetch(url + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json())
}

export { getPlants, createPlant, updatePlant, deletePlant }
