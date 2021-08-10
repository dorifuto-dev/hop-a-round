// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import "./images/plane.svg";
import "./css/base.scss";
import MicroModal from "micromodal";
import Traveler from "./Traveler";
import Trip from "./Trip";
import { fetchAPIData, postNewTrip } from "./api-Calls";
import domUpdateFunctions from "./domFunctions";

MicroModal.init();

// {openTrigger : 'data-micromodal-trigger', closeTrigger: "data-micromodal-close"}

// DUMMY NAV - REORGANIZE
// const loginBtn = document.querySelector(".login");
// const userTripsBtn = document.querySelector(".user-trips");
// const newTripBtn = document.querySelector(".new-trip");
// const defaultDisplay = document.querySelector(".default-display");
// const userDisplay = document.querySelector(".user-display");
// const loginError = document.getElementById("loginError");
const slides = document.querySelectorAll(".slide");
const signOutBtn = document.querySelector(".sign-out");
const loginForm = document.getElementById("loginForm");

let allTripData;
let user;
let allDestinationData;

loginForm.addEventListener("submit", (event) => {
  getLoginData(event);
})

signOutBtn.addEventListener("click", (event) => {
  domUpdateFunctions.toggleUserDefaultPage();
  MicroModal.close();
})

const checkHasNumber = (string) => {
  return /\d/.test(string);
}

// const checkProperFormat = (string) => {
//   if (string)
// }



const getLoginData = (event) => {
  // debugger
  event.preventDefault();
  const formData = new FormData(event.target);
  const password = formData.get('password');
  const username = formData.get('username');
  let userID;
  if (checkHasNumber(username) && username.includes("traveler") && password === "travel") {
    userID = username.match(/\d+/g)[0];
    // travel = username.match(/\d+/g)[1]
    // console.log(travel);

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
    .then(data => console.log("1 <>>>>", user));
  fetchAPIData("trips")
    .then(data => user.trips = data.trips.map(trip => new Trip(trip)).filter(trip => trip.userID === eval(id)))
    .then(data => console.log("2 <>>>>", user))
    // .then(data => console.log(data.trips));
  fetchAPIData("destinations")
    .then(data => user.trips.forEach(trip => trip.destination = data.destinations.find(destination => destination.id === trip.destinationID)))
    .then(data => console.log("3 <>>>>", user))
    .then(data => domUpdateFunctions.renderTripCards(user))
    .then(data => domUpdateFunctions.renderAllTripTotal(user));
}

// SLIDESHOW

var slideIndex = 0;

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
