// Select Document Object Model Items

const menuBtn = document.querySelector(".menu-btn"); //select whatever we put in here
const menu = document.querySelector(".menu"); //select whatever we put in here
const menuNav = document.querySelector(".menu-nav"); //select class
const menuBranding = document.querySelector(".menu-branding"); //select class

const navItems = document.querySelectorAll(".nav-item");

//Set initial sate of menu

let showMenu = false; //want to directly reassign this at times

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show")); // add show class for all nav items
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show")); // add show class for all nav items
    showMenu = false;
  }
}
