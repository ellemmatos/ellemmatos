const button = document.getElementById("menu-button");
const panel = document.getElementById("menu-panel");

button.addEventListener("click", () => {
  panel.classList.toggle("open");
});
