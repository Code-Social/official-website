document.addEventListener("DOMContentLoaded", () => {
    const navbarItems = document.querySelectorAll(".navbar ul li");
    const navbar = document.querySelector(".navbar ul");

    const toggleButton = document.querySelector(".toggle-button");
    const hamburgerImg = document.getElementById("hamburger-img");

    navbarItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "block";
            }
        });

        item.addEventListener("mouseout", () => {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    });
    // Toggle hamburger menu on small screens
    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        const isNavbarActive = navbar.classList.contains("active");
        hamburgerImg.src = isNavbarActive
            ? "/images/close.png"
            : "/images/hamburger.png";
    });
});

// Select the button, icon, and body element
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-toggle-icon");

const body = document.body;

// Check localStorage for the user's theme preference
const currentTheme = localStorage.getItem("theme");

// Function to set the appropriate theme icon
const setThemeIcon = (isDarkMode) => {
    themeIcon.src = isDarkMode
        ? "images/dark-mode.png"
        : "images/light-mode.png";

};
 
// Apply the saved theme on page load
if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    setThemeIcon(true);
} else {
    setThemeIcon(false);
}

// Toggle dark mode on button click
themeToggleBtn.addEventListener("click", function () {
    const isDarkMode = body.classList.toggle("dark-mode");

    // Save the user's preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Change the icon based on the current theme
    setThemeIcon(isDarkMode);
});



// Get the button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show the button when the user scrolls down 300px from the top
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };
    
    // When the user clicks the button, scroll to the top of the document
    scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
      });
    });
