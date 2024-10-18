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

    // Profile creation functionality
    const profileForm = document.getElementById('profile-form');
    
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const name = document.getElementById('profile-name').value;
            const email = document.getElementById('profile-email').value;
            const bio = document.getElementById('profile-bio').value;
            const skills = document.getElementById('profile-skills').value.split(',').map(skill => skill.trim());
            
            const profile = {
                name: name,
                email: email,
                bio: bio,
                skills: skills
            };
            
            // Store the profile
            localStorage.setItem('userProfile', JSON.stringify(profile));
            
            alert('Profile created successfully!');
            window.location.href = 'view-profile.html'; // Redirect to view profile page
        });
    }

    // View profile functionality
    const profileContainer = document.getElementById('profile-container');
    
    if (profileContainer) {
        const profileData = JSON.parse(localStorage.getItem('userProfile'));
        
        if (profileData) {
            document.getElementById('profile-name').textContent = profileData.name;
            document.getElementById('profile-email').textContent = profileData.email;
            document.getElementById('profile-bio').textContent = profileData.bio;
            document.getElementById('profile-skills').textContent = profileData.skills.join(', ');
        } else {
            profileContainer.textContent = 'No profile found.';
        }
    }
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
        ? "/images/dark-mode.png"
        : "/images/light-mode.png";
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