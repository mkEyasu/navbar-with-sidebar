const menuBtn = document.querySelector(".mobile_open_icon");
const sidebar = document.querySelector("aside");
const MenuIcon = document.querySelector(".menu_icon");
let _open = false;

menuBtn.addEventListener("click", (ev) => {
  if (!_open) {
    MenuIcon.classList.add("open");
    sidebar.classList.add("open");
    _open = true;
  } else {
    MenuIcon.classList.remove("open");
    sidebar.classList.remove("open");
    _open = false;
  }
});
