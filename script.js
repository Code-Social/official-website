document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('.navbar ul li');
    const toggleButton = document.querySelector('.toggle-button');
    const navbar = document.querySelector('.navbar ul');

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
    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
        });
    });