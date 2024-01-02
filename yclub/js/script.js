const modalBtn = document.getElementById("modalBtn");
const modalContainer = document.getElementById("modal");

modalBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
  if (!modalContainer.classList.contains("hidden")) {
    modalContainer.classList.add("hidden");
    modalContainer.classList.remove("over");
  }
});

modalBtn.addEventListener("mouseenter", () => {
  modalContainer.classList.add("over");
});

modalBtn.addEventListener("mouseleave", () => {
  modalContainer.classList.remove("over");
});
