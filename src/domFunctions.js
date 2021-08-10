const dayjs = require("dayjs");
const todaysDate = (dayjs().format("YYYY/MM/DD"));
const thisYear = dayjs().format("YYYY")

const loginBtn = document.querySelector(".login");
const userTripsBtn = document.querySelector(".user-trips");
const newTripBtn = document.querySelector(".new-trip");
const signOutBtn = document.querySelector(".sign-out");
const defaultDisplay = document.querySelector(".default-display");
const userDisplay = document.querySelector(".user-display");
const userDisplayGrid = document.getElementById("userDisplayGrid");
const newTripPage = document.getElementById("newTripPage");
const destinationsList = document.getElementById("destinations");

const domUpdateFunctions = {
  clearError() {
    const loginError = document.getElementById("loginError");
    loginError.innerText = "";
  },

  toggleUserDefaultPage: () => {
    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
    userDisplay.classList.toggle("hide");
  },

  showNewTripPage() {
    newTripPage.classList.remove("hide");
    userDisplay.classList.add("hide");
  },

  backToMainPage() {
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

  // counter: (num) => {
  //   num += 1;
  // },

  populateDestinationsArray: (destinationArr) => {
    console.log(destinationArr)
    destinationsList.innerHTML = "";
    let destinationHTML = "";
    let id = 1
    destinationArr.forEach(dest => {
      destinationHTML += `<option value=${id}>${dest}</option>`
      id++;
    })
    console.log(destinationHTML);
    destinationsList.innerHTML = destinationHTML;
  },

  renderTripCards(user) {
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

  renderAllTripTotal(user) {
    const totalThisYear = document.getElementById("totalThisYear");
    totalThisYear.innerText = `${thisYear} Total Spent: $${user.findTotalSpent(thisYear)}`;
  }
}

export default domUpdateFunctions;
