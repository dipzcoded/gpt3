const meun = document.querySelector(".list");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
const list = document.querySelectorAll(".values");
const headerTag = document.querySelector("header");

function toggleMenu() {
  meun.classList.toggle("show");
open.classList.toggle("notShowMenu");
close.classList.toggle("notShowMenu");
}
const icon = [open,close];
icon.forEach((el) => el.addEventListener("click", toggleMenu)
);

window.addEventListener("scroll", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("load", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
});