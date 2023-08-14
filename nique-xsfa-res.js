let timer = document.querySelector(".bx-time");
let navTimer = document.querySelector(".navigation-timer");

timer.onclick = () => {
  navTimer.classList.toggle("top");
};

let menus = document.querySelector(".menu");

menus.onclick = () => {
  window.location.href = "nique-menu-page.html";
};

let nique = document.querySelector(".home-nique");

nique.onclick = () => {
  window.location.href = "nique-home-page.html";
};

let bookTable = document.querySelector(".navi-book");

bookTable.onclick = () => {
  window.location.href = "nique-book-page.html";
};

let contact = document.querySelector(".contact-n");

contact.onclick = () => {
  window.location.href = "nique-contact-page.html";
};

let restaurant = document.querySelector(".restaurant");

restaurant.onclick = () => {
  window.location.href = "nique-restaurant-page.html";
};

let cls = document.querySelector(".class");

cls.onclick = () => {
  window.location.href = "nique-classes-page.html";
};

let erore = document.querySelector(".erore");

erore.onclick = () => {
  window.location.href = "404-page.html";
};
