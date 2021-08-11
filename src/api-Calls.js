import domUpdateFunctions from "./domFunctions";

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

const postNewTrip = (tripObject, tripTotal, destObj) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tripObject)
  })
    .then(response => checkForError(response, tripObject, tripTotal, destObj))
    .catch(error => domUpdateFunctions.displayError(error))
}

const checkForError = (response, tripObject, tripTotal, destObj) => {
  if (!response.ok) {
    throw new Error("Please make sure that all fields are filled out.");
  } else {
    domUpdateFunctions.showAllTripsPage();
    domUpdateFunctions.renderNewTripCard(tripObject, tripTotal, destObj)
    return response.json()
  }
}

export { fetchAPIData, postNewTrip };
