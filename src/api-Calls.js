const fetchAPIData = (type, id) => {
  if (id) {
    return fetch(`http://localhost:3001/api/v1/${type}/${id}`)
      .then(response => response.json())
      .catch(error => console.log("error: ", error))
  } else {
    return fetch(`http://localhost:3001/api/v1/${type}`)
      .then(response => response.json())
      .catch(error => console.log("error: ", error))
  }
}

export { fetchAPIData };
