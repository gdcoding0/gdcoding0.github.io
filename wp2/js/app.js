/* Nav Menu */

console.log("works");

const navMenu = document.getElementById("menu");
const navMenuBtn = document.getElementById("hamburger");
const navMenuXBtn = document.getElementById("close");
const layer = document.querySelector(".menu-layer");
const container = document.querySelector(".container");

navMenuBtn.addEventListener("click", () => {
  if (!navMenu.classList.contains("menu-hidden")) {
    navMenu.classList.add("menu-hidden");
    setTimeout(() => {
      navMenu.style.opacity = "0";
    }, 100);
  } else {
    navMenu.style.opacity = "1";
    setTimeout(() => {
      navMenu.classList.remove("menu-hidden");
      layer.classList.toggle("enabled");
    }, 100);
  }
});

navMenuXBtn.addEventListener("click", () => {
  if (!navMenu.classList.contains("menu-hidden")) {
    navMenu.classList.add("menu-hidden");
    layer.classList.toggle("enabled");
  } else {
    navMenu.classList.remove("menu-hidden");
  }
});
