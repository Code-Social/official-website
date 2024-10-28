// Check for saved dark mode preference in localStorage
let darkmode = localStorage.getItem("darkmode");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-toggle-icon");
const body = document.body;
const footer = document.querySelector("footer"); // Select the footer element
const footerSpan = footer.querySelector(".website-name"); // Select the span inside the footer
const footerParagraph = footer.querySelector(".footer-about-text");

// Enable Dark Mode
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

  resourceCards.forEach(card => {
    card.classList.add("dark-mode-card"); // Add dark mode to each resource card
  });

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

  resourceCards.forEach(card => {
    card.classList.remove("dark-mode-card"); // Remove dark mode from each resource card
  });

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
