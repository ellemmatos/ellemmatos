const menu = document.querySelector(".site-menu");
const button = document.getElementById("menu-button");
const panel = document.getElementById("menu-panel");

if (menu && button && panel) {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    panel.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = menu.contains(event.target);

    if (!clickedInsideMenu) {
      panel.classList.remove("open");
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("open");
    });
  });
}
