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

// menu items

// const navIcon = $.querySelector(".nav-icon")
// const menu = $.querySelector(".menu")

// navIcon.addEventListener("click",function() {
//     menu.classList.add("visible")
//     menu.classList.remove("hidden")
// })
