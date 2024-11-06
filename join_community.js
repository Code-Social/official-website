// JavaScript to toggle between light and dark themes
const toggleThemeBtn = document.getElementById("themeToggle");

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Change the button text when toggling the theme
    if (document.body.classList.contains("dark-mode")) {
        toggleThemeBtn.textContent = "Switch to Light Mode";
    } else {
        toggleThemeBtn.textContent = "Switch to Dark Mode";
    }
});