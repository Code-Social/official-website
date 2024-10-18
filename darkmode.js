let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch-fixed'); // Use the correct ID

const enableDarkMode = () => {
    document.body.classList.add('dark-mode'); // Ensure class name matches CSS
    localStorage.setItem('darkmode', 'active');
    updateThemeSwitchText(); 
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode'); // Ensure class name matches CSS
    localStorage.setItem('darkmode', 'inactive');
    updateThemeSwitchText(); 
};

const updateThemeSwitchText = () => {
    themeSwitch.textContent = darkmode === "active" ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙";
};

if (darkmode === "active") {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Update button text on initial load
updateThemeSwitchText();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode === "active" ? disableDarkMode() : enableDarkMode();
});