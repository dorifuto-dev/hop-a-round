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

const postNewTrip = (tripObject) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObject)
  })
    .then(response => checkForError(response))
    .catch(error => console.log(error))
}

const checkForError = (response) => {
  if (!response.ok) {
    error.forEach(error => error.innerText = "Please make sure that all fields are filled out.");
    throw new Error("Please make sure that all fields are filled out.");
  } else {
    return response.json()
  }
}

export { fetchAPIData, postNewTrip };
