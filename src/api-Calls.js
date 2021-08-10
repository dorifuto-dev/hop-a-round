const tripError = document.getElementById("newTripError")

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
  fetch("http://localhost:300/api/v1/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObject)
  })
    .then(response => checkForError(response))
    .catch(error => displayError(error))
}

const displayError = (error) => {
  console.log(error)
  tripError.innerText = "Trip Request timed out. Please try again.";
  setTimeout(clearError, 5000);
}

const clearError = () => {
  tripError.innerText = "";
}

const checkForError = (response) => {
  if (!response.ok) {
    // tripError.innerText = "Please make sure that all fields are filled out.";
    throw new Error("Please make sure that all fields are filled out.");
  } else {
    return response.json()
  }
}

export { fetchAPIData, postNewTrip };
