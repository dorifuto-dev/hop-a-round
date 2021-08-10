// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import "./images/plane.svg";
import "./css/base.scss";
import MicroModal from "micromodal";
import Traveler from "./Traveler";
import { fetchAPIData, postNewTrip } from "./api-Calls";
import domUpdateFunctions from "./domFunctions";

MicroModal.init();

const slides = document.querySelectorAll(".slide");

// DUMMY NAV - REORGANIZE
// const loginBtn = document.querySelector(".login");
// const userTripsBtn = document.querySelector(".user-trips");
// const newTripBtn = document.querySelector(".new-trip");
// const signOutBtn = document.querySelector(".sign-out");
// const defaultDisplay = document.querySelector(".default-display");
// const userDisplay = document.querySelector(".user-display");
const loginForm = document.getElementById("loginForm");
// const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", (event) => {
  getLoginData(event);
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
  if (checkHasNumber(username) && password === "travel") {
    userID = username.match(/\d+/g)[0];
    console.log(userID);
    getUser(userID);
    domUpdateFunctions.toggleUserDefaultPage();
  } else {
    loginError.innerText = "Incorrect username or password. Please try again.";
    setTimeout(domUpdateFunctions.clearError, 5000);
  }
  event.target.reset();
}


// loginBtn.addEventListener("click", () => {
//   showUserDisplay();
// });
//
// signOutBtn.addEventListener("click", () => {
//   showDefaultPage();
// })
//
// const showUserDisplay = () => {
//   defaultDisplay.classList.add("hide")
//   userDisplay.classList.remove("hide");
//   signOutBtn.classList.remove("hide");
//   userTripsBtn.classList.remove("hide");
//   newTripBtn.classList.remove("hide");
// }
//
// const showDefaultPage = () => {
//   defaultDisplay.classList.remove("hide")
//   userDisplay.classList.add("hide");
//   signOutBtn.classList.add("hide");
//   userTripsBtn.classList.add("hide");
//   newTripBtn.classList.add("hide");
// }

const getUser = (id) => {
  fetchAPIData("travelers", id)
    .then(data => new Traveler(data))
    .then(data => console.log(data))
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
