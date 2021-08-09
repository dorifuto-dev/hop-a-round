// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import MicroModal from "micromodal";

MicroModal.init();

const slides = document.querySelectorAll(".slide");

// DUMMY NAV - REORGANIZE
const loginBtn = document.querySelector(".login");
const userTripsBtn = document.querySelector(".user-trips");
const newTripBtn = document.querySelector(".new-trip");
const signOutBtn = document.querySelector(".sign-out");
const defaultDisplay = document.querySelector(".default-display");
const userDisplay = document.querySelector(".user-display");

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



var slideIndex = 0;

const showSlides = () => {
  // slides.forEach(slide => slide.classList.add("hide"))
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

showSlides();
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'



// After GETting data, store in global variables

// (tripData [x],
// destinationData [x] (needs to display list of destinations to choose),
// traveler [x])

// use day.js for date input
