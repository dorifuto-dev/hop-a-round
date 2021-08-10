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
const signOutBtn = document.getElementById("signOutBtn");
const loginForm = document.getElementById("loginForm");
const newTripBtn = document.getElementById("newTripBtn");
const allTripsBtn = document.getElementById("allTripsBtn");
const newTripForm = document.getElementById("newTripForm");

let allTrips;
let user;
let userID;
let allDestinationNames;
let tripID = 201;

window.addEventListener("load", () => {
  getDestinationsArray();
})

loginForm.addEventListener("submit", (event) => {
  getLoginData(event);
})

signOutBtn.addEventListener("click", (event) => {
  domUpdateFunctions.backToMainPage();
  MicroModal.close();
})

newTripBtn.addEventListener("click", (event) => {
  domUpdateFunctions.showNewTripPage();
})

allTripsBtn.addEventListener("click", (event) => {
  domUpdateFunctions.showAllTripsPage();
})

const checkHasNumber = (string) => {
  return /\d/.test(string);
}

const getDestinationsArray = () => {
  fetchAPIData("destinations")
    // .then(response => response.json())
    .then(data => allDestinationNames = data.destinations.map(destination => destination.destination))
    // .then(data => console.log(allDestinationNames))
    .then(data => domUpdateFunctions.populateDestinationsArray(allDestinationNames));
}

newTripForm.addEventListener("submit", (event) => {
  // getNewTripData(event);
  getTripDataLength(event);
})

const getTripDataLength = (event) => {
  event.preventDefault();
  fetchAPIData("trips")
    .then(data => length = data.trips.length)
    .then(data => console.log(length))
    .then(data => getNewTripData(event, length))
}

const getLoginData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get('password');
  const username = formData.get('username');
  // let userID;
  if (checkHasNumber(username) && username.includes("traveler") && password === "travel") {
    userID = username.match(/\d+/g)[0];
    getUser(userID);
    domUpdateFunctions.toggleUserDefaultPage();
  } else {
    loginError.innerText = "Incorrect username or password. Please try again.";
    setTimeout(domUpdateFunctions.clearError, 5000);
  }
  event.target.reset();
}

const getNewTripData = (event, length) => {
  // event.preventDefault();
  const formData = new FormData(event.target);
  const newTrip = {
    id: length,
    userID: JSON.parse(userID),
    destinationID: JSON.parse(formData.get("destination")),
    travelers: JSON.parse(formData.get("travelers")),
    date: dayjs(formData.get("departure-date")).format("YYYY/MM/DD"),
    duration: JSON.parse(formData.get("duration")),
    status: "pending",
    suggestedActivities: []
  }
  tripID++;
  console.log("NEW TRIP <>>>", newTrip)
  matchDestination(newTrip);
  // domUpdateFunctions.displayTripPreview(newTrip);
  // postNewTrip(newTrip);
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
  // console.log("ID", id)
  fetchAPIData("travelers", id)
    // .then(response => response.json())
    .then(data => user = new Traveler(data))
    // .then(data => console.log("1 <>>>>", user))
    .then(data => getUserTrips(id, user));
}

const getUserTrips = (id, user) => {
  fetchAPIData("trips")
    // .then(response => response.json())
    // .then(data => allTrips = data.trips);
    // console.log(allTrips)
    // .then(data => user.trips = allTrips.map(trip => new Trip(trip)).filter())
    .then(data => user.trips = data.trips.map(trip => new Trip(trip)).filter(trip => trip.userID === eval(id)))
    .then(data => getTripDestinations(id, user));
}

const getTripDestinations = (id, user) => {
  fetchAPIData("destinations")
    // .then(response => response.json())
    // .then(data => console.log(data)
    .then(data => user.trips.forEach(trip => trip.destination = data.destinations.find(destination => destination.id === trip.destinationID)))
    // .then(data => console.log("3 <>>>>", data))
    .then(data => setTimeout(600))
    .then(data => domUpdateFunctions.renderTripCards(user))
    .then(data => domUpdateFunctions.renderAllTripTotal(user));
}

// SLIDESHOW

let slideIndex = 0;

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
// An example of how you tell webpack to use a CSS (SCSS) file

// An example of how you tell webpack to use an image (also need to link to it in the index.html)



// After GETting data, store in global variables

// (tripData [x],
// destinationData [x] (needs to display list of destinations to choose),
// traveler [x])

// use day.js for date input
