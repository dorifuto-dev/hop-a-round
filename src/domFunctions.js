

const domUpdateFunctions = {
  // sample() {
  //   console.log("HELLLOOOOO")
  // }

  clearError() {
    const loginError = document.getElementById("loginError");
    loginError.innerText = "";
  },

  toggleUserDefaultPage() {
    const loginBtn = document.querySelector(".login");
    const userTripsBtn = document.querySelector(".user-trips");
    const newTripBtn = document.querySelector(".new-trip");
    const signOutBtn = document.querySelector(".sign-out");
    const defaultDisplay = document.querySelector(".default-display");
    const userDisplay = document.querySelector(".user-display");

    loginBtn.classList.toggle("hide");
    userTripsBtn.classList.toggle("hide");
    newTripBtn.classList.toggle("hide");
    signOutBtn.classList.toggle("hide");
    defaultDisplay.classList.toggle("hide");
    userDisplay.classList.toggle("hide");
  },

  renderTripCards(user) {
    const userDisplayGrid = document.getElementById("userDisplayGrid");
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
    // userDisplayGrid.insertAdjacentHTML("afterbegin", tripCardHTML)

  }

    // if (loginBtn.classList.includes("hide")) {
    //   loginBtn.classList.remove("hide")
    // } else {
    //   loginBtn.classList.add("hide")
    // }
    //
    // if (userTripsBtn.classList.includes("hide")) {
    //   userTripsBtn.classList.remove("hide")
    // } else {
    //   userTripsBtn.classList.add("hide")
    // }
    //
    // if (newTripBtn.classList.includes("hide")) {
    //   newTripBtn.classList.remove("hide")
    // } else {
    //   newTripBtn.classList.add("hide")
    // }
    //
    // if (signOutBtn.classList.includes("hide")) {
    //   signOutBtn.classList.remove("hide")
    // } else {
    //   signOutBtn.classList.add("hide")
    // }
    //
    // if (defaultDisplay.classList.includes("hide")) {
    //   defaultDisplay.classList.remove("hide")
    // } else {
    //   defaultDisplay.classList.add("hide")
    // }
    //
    // if (userDisplay.classList.includes("hide")) {
    //   userDisplay.classList.remove("hide")
    // } else {
    //   userDisplay.classList.add("hide")
    // }

  // }
}

export default domUpdateFunctions;
