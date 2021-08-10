import "./images/plane.svg";
import "./css/base.scss";
import MicroModal from "micromodal";
import Traveler from "./Traveler";
import Trip from "./Trip";
import { fetchAPIData, postNewTrip } from "./api-Calls";
import domUpdateFunctions from "./domFunctions";

MicroModal.init();

const slides = document.querySelectorAll(".slide");
const signOutBtn = document.querySelector(".sign-out");
const loginForm = document.getElementById("loginForm");
const newTripBtn = document.getElementById("newTripBtn");

// let allTripData;
let user;
// let allDestinationData;
window.addEventListener("load", () => {
  // populateDestinationsInput();
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

const checkHasNumber = (string) => {
  return /\d/.test(string);
}

const populateDestinationsInput = () => {

}

const getLoginData = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get('password');
  const username = formData.get('username');
  let userID;
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

const getUser = (id) => {
  console.log("ID", id)
  fetchAPIData("travelers", id)
    .then(data => user = new Traveler(data))
    .then(data => console.log("1 <>>>>", user))
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
    .then(data => console.log("3 <>>>>", user))
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
