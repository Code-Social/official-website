// Check for saved dark mode preference in localStorage
let darkmode = localStorage.getItem("darkmode");
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const footer = document.querySelector("footer");
const footerSpan = footer.querySelector(".website-name");
const footerParagraph = footer.querySelector(".footer-about-text");
// Select all resource cards
const resourceCards = document.querySelectorAll(".resource-card");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");

  footer.classList.add("dark-mode-footer");
  footer.classList.remove("light-mode-footer");

  footerSpan.classList.add("dark-text");
  footerSpan.classList.remove("light-text");

  footerParagraph.classList.add("dark-text");
  footerParagraph.classList.remove("light-text");

  // Add dark mode styles to each resource card
  resourceCards.forEach((card) => {
    card.classList.add("dark-mode-card");
  });

  // Set the theme icons
  themeToggleBtn.querySelector(".theme-icon-light").style.opacity = "0";
  themeToggleBtn.querySelector(".theme-icon-dark").style.opacity = "1";

  localStorage.setItem("darkmode", "active");
  themeIcon.src = "images/light-mode.png";
};

// Disable Dark Mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");

  footer.classList.remove("dark-mode-footer");
  footer.classList.add("light-mode-footer");

  footerSpan.classList.add("light-text");
  footerSpan.classList.remove("dark-text");

  footerParagraph.classList.add("light-text");
  footerParagraph.classList.remove("dark-text");

  // Remove dark mode styles from each resource card
  resourceCards.forEach((card) => {
    card.classList.remove("dark-mode-card");
  });

  // Set the theme icons
  themeToggleBtn.querySelector(".theme-icon-light").style.opacity = "1";
  themeToggleBtn.querySelector(".theme-icon-dark").style.opacity = "0";

  localStorage.setItem("darkmode", "inactive");
  themeIcon.src = "images/dark-mode.png";
};

// Apply the saved theme on page load
if (darkmode === "active") {
  enableDarkMode(); // Start in dark mode if the user prefers it
} else {
  disableDarkMode(); // Otherwise, start in light mode
}

// Toggle dark mode on button click
themeToggleBtn.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode"); // Get the current state
  if (darkmode === "active") {
    disableDarkMode(); // Switch to light mode
  } else {
    enableDarkMode(); // Switch to dark mode
  }
});
