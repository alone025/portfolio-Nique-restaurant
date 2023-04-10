let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-items");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

let darkmode = document.querySelector("#dark");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("dark");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("dark");
  }
};
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  header.classList.toggle("active", window.scrollY > 10);
});
