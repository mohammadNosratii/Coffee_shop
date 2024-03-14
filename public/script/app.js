let $ = document;

// change theme
const changeTheme = $.querySelector("html");
const switchThemeBtn = $.querySelectorAll(".switch-theme");
const themeIcon = $.querySelector(".theme-icon");

switchThemeBtn.forEach(function (theme) {
  theme.addEventListener("click", function () {
    if (changeTheme.className.includes("dark")) {
      changeTheme.classList.remove("dark");
      themeIcon.setAttribute("href", "#moon");
      localStorage.setItem("theme", "");
    } else {
      changeTheme.classList.add("dark");
      themeIcon.setAttribute("href", "#sun");
      localStorage.setItem("theme", "dark");
    }
  });
});

window.addEventListener("load", function () {
  const savedThemeColor = localStorage.getItem("theme");
  if (savedThemeColor === "dark") {
    changeTheme.classList.add("dark");
    themeIcon.setAttribute("href", "#sun");
  }
});

// open menu btn // close menu btn

const navIcon = $.querySelector(".nav-icon");
const menu = $.querySelector(".menu");
const closeMenuBtn = $.querySelector(".close-menu-btn");
const overlay = $.querySelector(".overlay");

navIcon.addEventListener("click", function () {
  menu.classList.add("right-0");
  menu.classList.remove("-right-64");
  overlay.classList.add("overlay-visible");
});

function closeMenuHandler () {
  menu.classList.remove("right-0");
  menu.classList.add("-right-64");
  overlay.classList.remove("overlay-visible");
}

closeMenuBtn.addEventListener("click", closeMenuHandler)
overlay.addEventListener("click", closeMenuHandler)

// menu items

const dropDownBtn = $.querySelector(".submenu"); 
const dropDownItems = $.querySelector(".submenu-open");
const subMenuActive = $.querySelector(".submenu-active");

function dropDownHandler() {
  dropDownBtn.classList.toggle("rotate-180");
  dropDownItems.classList.toggle("max-h-screen");
  dropDownItems.classList.toggle("max-h-0");
  dropDownItems.classList.toggle("mt-4");
  dropDownItems.classList.toggle("overflow-scroll");
  dropDownItems.classList.toggle("overflow-hidden");
  subMenuActive.classList.toggle("text-orange-300");
}

dropDownBtn.addEventListener("click", dropDownHandler);
