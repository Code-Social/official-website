
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');


const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    updateThemeSwitchText(); 
};


const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
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


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode === "active" ? disableDarkMode() : enableDarkMode();
});

// Update button text on initial load
updateThemeSwitchText();
