// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

console.log("It works");
const navToggle = document.getElementById("ham");
const links = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav");
const navSocials = document.querySelector(".nav-socials");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  navBar.classList.toggle("top");
  navSocials.classList.toggle("bottom");
});
