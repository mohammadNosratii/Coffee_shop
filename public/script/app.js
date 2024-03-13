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


// open menu btn

const navIcon = $.querySelector(".nav-icon")
const menu = $.querySelector(".menu")

navIcon.addEventListener("click",function() {
menu.classList.add("right-0")
menu.classList.remove("-right-72")
})

// close menu btn

const closeMenuBtn = $.querySelector(".close-menu-btn")

closeMenuBtn.addEventListener("click",function() {
  menu.classList.remove("right-0")
menu.classList.add("-right-72")
})

// menu items 

const dropDownBtn = $.querySelector(".drop-down-menu")
const chevronDownIcon = $.querySelector(".chevron-down-icon")
const dropDownItems = $.querySelector(".drop-down-items")

function dropDownHandler (event) {
  event.preventDefault()
  if (chevronDownIcon.className.includes("rotate-180")) {
    chevronDownIcon.classList.remove("rotate-180")
    dropDownItems.classList.remove("flex")
    dropDownItems.classList.add("hidden")
  } else {
    chevronDownIcon.classList.add("rotate-180")
    dropDownItems.classList.add("flex")
    dropDownItems.classList.remove("hidden")
  }
  
}

dropDownBtn.addEventListener("click",dropDownHandler)