document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('.navbar ul li');

    navbarItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });
    // Toggle hamburger menu on small screens
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelectorAll('.navbar ul li');

    toggleButton.addEventListener('click', () => {
        navbarLinks.forEach(link => {
            link.classList.toggle('active');
        });
    });
});
// Toggle hamburger menu
document.querySelector('.toggle-button').addEventListener('click', function() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
});

