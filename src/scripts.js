import "./images/plane.svg";
import "./css/base.scss";
import MicroModal from "micromodal";
import Traveler from "./Traveler";
import Trip from "./Trip";
import { fetchAPIData, postNewTrip } from "./api-Calls";
import domUpdateFunctions from "./domFunctions";
const dayjs = require("dayjs");

MicroModal.init();

const slides = document.querySelectorAll(".slide");
const signOutText = document.getElementById("signOutText");
const newTripText = document.getElementById("newTripText");
const allTripsText = document.getElementById("allTripsText");
const loginForm = document.getElementById("loginForm");
const newTripForm = document.getElementById("newTripForm");

let user;
let userID;
let allDestinationNames;
let newID;
let slideIndex = 0;

window.addEventListener("load", () => {
  getDestinationsArray();
})

loginForm.addEventListener("submit", (event) => {
  getLoginData(event);
})

signOutText.addEventListener("click", (event) => {
  domUpdateFunctions.backToMainPage();
  MicroModal.close();
})

newTripText.addEventListener("click", (event) => {
  domUpdateFunctions.showNewTripPage();
})

allTripsText.addEventListener("click", (event) => {
  domUpdateFunctions.showAllTripsPage();
})

const checkHasNumber = (string) => {
  return /\d/.test(string);
}

const getDestinationsArray = () => {
  fetchAPIData("destinations")
    .then(data => allDestinationNames = data.destinations.map(destination => destination.destination))
    .then(data => domUpdateFunctions.populateDestinationsArray(allDestinationNames));
}

newTripForm.addEventListener("submit", (event) => {
  getTripDataLength(event);
})

const getTripDataLength = (event) => {
  event.preventDefault();
  fetchAPIData("trips")
    .then(data => newID = data.trips.length + 1)
    .then(data => console.log(newID))
    .then(data => getNewTripData(event, newID))
}

const getLoginData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get('password');
  const username = formData.get('username');
  const usernameArray = username.split(/(\d+)/);
  if (usernameArray[1] > 0 && usernameArray[1] <= 50 && usernameArray[0] === "traveler" && password === "travel") {
    getUser(usernameArray[1]);
    domUpdateFunctions.toggleUserDefaultPage();
  } else {
    loginError.innerText = "Incorrect username or password. Please try again.";
    setTimeout(domUpdateFunctions.clearError, 5000);
  }
  event.target.reset();
}

const getNewTripData = (event, newID) => {
  const formData = new FormData(event.target);
  const newTrip = {
    id: newID,
    userID: JSON.parse(userID),
    destinationID: JSON.parse(formData.get("destination")),
    travelers: JSON.parse(formData.get("travelers")),
    date: dayjs(formData.get("departure-date")).format("YYYY/MM/DD"),
    duration: JSON.parse(formData.get("duration")),
    status: "pending",
    suggestedActivities: []
  }
  console.log("NEW TRIP <>>>", newTrip)
  matchDestination(newTrip);
  event.target.reset();
}

const matchDestination = (trip) => {
  let newDestination;
  fetchAPIData("destinations")
    .then(data => newDestination = data.destinations.find(destination => destination.id === trip.destinationID))
    .then(data => console.log("MATCH <>>>", newDestination))
    .then(data => domUpdateFunctions.displayTripPreview(trip, newDestination))
}

const getUser = (id) => {
  fetchAPIData("travelers", id)
    .then(data => user = new Traveler(data))
    .then(data => getUserTrips(id, user));
}

const getUserTrips = (id, user) => {
  fetchAPIData("trips")
    .then(data => user.trips = data.trips.map(trip => new Trip(trip)).filter(trip => trip.userID === eval(id)))
    .then(data => getTripDestinations(id, user));
}

const getTripDestinations = (id, user) => {
  fetchAPIData("destinations")
    .then(data => user.trips.forEach(trip => trip.destination = data.destinations.find(destination => destination.id === trip.destinationID)))
    .then(data => setTimeout(600))
    .then(data => domUpdateFunctions.renderTripCards(user))
    .then(data => domUpdateFunctions.renderAllTripTotal(user));
}

// SLIDESHOW

const showSlides = () => {
  slides.forEach(slide => slide.style.display ="none")
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

showSlides();
