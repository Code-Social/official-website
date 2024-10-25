// Check for saved dark mode preference in localStorage
let darkmode = localStorage.getItem("darkmode");
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const footer = document.querySelector("footer");
const footerSpan = footer.querySelector(".website-name");
const footerParagraph = footer.querySelector(".footer-about-text");

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
    localStorage.setItem("darkmode", "active");
    themeToggleBtn.querySelector(".theme-icon-light").style.opacity = '0';
    themeToggleBtn.querySelector(".theme-icon-dark").style.opacity = '1';
};

// Disable Dark Mode (Switch to Light Mode)
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    footer.classList.remove("dark-mode-footer");
    footer.classList.add("light-mode-footer");
    footerSpan.classList.add("light-text");
    footerSpan.classList.remove("dark-text");
    footerParagraph.classList.add("light-text");
    footerParagraph.classList.remove("dark-text");
    localStorage.setItem("darkmode", "inactive");
    themeToggleBtn.querySelector(".theme-icon-light").style.opacity = '1';
    themeToggleBtn.querySelector(".theme-icon-dark").style.opacity = '0';
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
