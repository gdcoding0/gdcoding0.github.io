const navBar = document.getElementById("navbar");
const navBarPos = navBar.offsetTop;
console.log(navBarPos);

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollX || document.documentElement.scrollTop;

  if (scrollPos > navBarPos) {
    navBar.classList.add("nav-scroll");
  } else {
    navBar.classList.remove("nav-scroll");
  }
});
