import { fetchAPIData, postNewTrip } from "./api-Calls";
const dayjs = require("dayjs");
const todaysDate = (dayjs().format("YYYY/MM/DD"));
const thisYear = dayjs().format("YYYY")

const loginBtn = document.getElementById("loginBtn");
const userTripsBtn = document.getElementById("allTripsBtn");
const newTripBtn = document.getElementById("newTripBtn");
const signOutBtn = document.getElementById("signOutBtn");
const defaultDisplay = document.getElementById("defaultDisplay");
const userDisplay = document.getElementById("userDisplay");
const userDisplayGrid = document.getElementById("userDisplayGrid");
const newTripPage = document.getElementById("newTripPage");
const destinationsList = document.getElementById("destinations");
const totalThisYear = document.getElementById("totalThisYear");
const loginError = document.getElementById("loginError");
const newTripForm = document.getElementById("newTripForm");
const tripEstimateCard = document.getElementById("tripEstimateCard");
const tripEstimateDestination = document.getElementById("tripEstimateDestination");
const tripEstimateDate = document.getElementById("tripEstimateDate");
const tripEstimateDuration = document.getElementById("tripEstimateDuration");
const tripEstimateTravelers = document.getElementById("tripEstimateTravelers");
const tripEstimateCost = document.getElementById("tripEstimateCost");
const cancelTrip = document.getElementById("cancelTrip");
const confirmTrip = document.getElementById("confirmTrip");
const tripError = document.getElementById("newTripError");

const domUpdateFunctions = {

  clearError: () => {
    loginError.innerText = "";
    tripError.innerText = "";
  },

  displayError: (error) => {
    console.log(error)
    tripError.innerText = "Trip Request timed out. Please try again.";
    setTimeout(domUpdateFunctions.clearError, 5000);
  },

  toggleUserDefaultPage: () => {
    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
    userDisplay.classList.toggle("hide");
  },

  showNewTripPage: () => {
    if (!tripEstimateCard.classList.contains("hide")) {
      tripEstimateCard.classList.add("hide");
      newTripForm.classList.remove("hide");
    }
    newTripPage.classList.remove("hide");
    userDisplay.classList.add("hide");
  },

  backToMainPage: () => {
    if (!newTripPage.classList.contains("hide")) {
      newTripPage.classList.add("hide");
    }
    userDisplay.classList.add("hide");
    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
  },

  showAllTripsPage: () => {
    userDisplay.classList.remove("hide");
    newTripPage.classList.add("hide");
  },

  populateDestinationsArray: (destinationArr) => {
    destinationsList.innerHTML = "";
    let destinationHTML = "";
    let id = 1;
    destinationArr.forEach(dest => {
      destinationHTML += `<option value=${id}>${dest}</option>`
      id++;
    })
    destinationsList.innerHTML = destinationHTML;
  },

  renderTripCards: (user) => {
    userDisplayGrid.innerHTML = "";
    let tripCardHTML = "";
    user.trips.forEach(trip => {
      const destination = trip.destination;
      tripCardHTML += `<article class="trip-card">
          <div class="trip-preview">
            <img class="trip-image" src=${destination.image} alt=${destination.alt}>
          </div>
          <div class="trip-info">
            <h3 class="destination-name">${destination.destination}</h3>
            <p class="departure-date">${trip.date}</p>
            <p class="number-of-travelers">${trip.travelers} travelers</p>
            <p class="trip-status">${trip.status}</p>
            <p class="trip-cost">$${trip.calculateTotalFare()}</p>
          </div>
        </article>`;
    })
    userDisplayGrid.innerHTML = tripCardHTML;
  },

  renderNewTripCard: (trip, total, destObj) => {
    userDisplayGrid.innerHTML += `<article class="trip-card">
        <div class="trip-preview">
          <img class="trip-image" src=${destObj.image} alt=${destObj.alt}>
        </div>
        <div class="trip-info">
          <h3 class="destination-name">${destObj.destination}</h3>
          <p class="departure-date">${trip.date}</p>
          <p class="number-of-travelers">${trip.travelers} travelers</p>
          <p class="trip-status">${trip.status}</p>
          <p class="trip-cost">$${total}</p>
        </div>
      </article>`
  },

  renderAllTripTotal: (user) => {
    totalThisYear.innerText = `${thisYear} Total Spent: $${user.findTotalSpent(thisYear)}`;
  },

  hideShowFormEstimate: () => {
    newTripForm.classList.toggle("hide");
    tripEstimateCard.classList.toggle("hide");
  },

  displayTripPreview: (trip, destObj) => {
    domUpdateFunctions.hideShowFormEstimate();
    const totalLodging = destObj.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
    const totalAirfare = destObj.estimatedFlightCostPerPerson * trip.travelers;
    const total = Math.round((totalLodging + totalAirfare) * 1.1);

    tripEstimateDestination.innerText = destObj.destination;
    tripEstimateDate.innerText = trip.date;
    tripEstimateDuration.innerText = `${trip.duration} days`;
    tripEstimateTravelers.innerText = `${trip.travelers} travelers`;
    tripEstimateCost.innerText = `Total Cost: $${total}`;
    domUpdateFunctions.evaluateUserChoice(trip, total, destObj);
  },

  evaluateUserChoice: (trip, total, destObj) => {
    cancelTrip.onclick = () => {
      domUpdateFunctions.hideShowFormEstimate();
    }
    confirmTrip.onclick = () => {
      postNewTrip(trip, total, destObj);
    }
  }
}

export default domUpdateFunctions;
