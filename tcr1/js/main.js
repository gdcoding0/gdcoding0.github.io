// Tameside PC Repair
// Main Javascript
// V1.0
// Last Updated 12/01/24

// 1. Hamburger Menu

const ham = document.getElementById("ham");
const menu = document.getElementById("nmenu");
const navHead = document.getElementById("nhead");
const topEl = document.getElementById("top");

ham.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    navHead.classList.toggle("top");
  }
});
