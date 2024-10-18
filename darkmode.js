// Check for saved dark mode preference in localStorage
let darkmode = localStorage.getItem("darkmode");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-toggle-icon");
const body = document.body;

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode"); // Ensure light mode class is removed
  localStorage.setItem("darkmode", "active");
  themeIcon.src = "images/light-mode.png"; // Light mode icon in dark mode
};

// Disable Dark Mode (Switch to Light Mode)
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode"); // Ensure light mode class is added
  localStorage.setItem("darkmode", "inactive");
  themeIcon.src = "images/dark-mode.png"; // Dark mode icon in light mode
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
