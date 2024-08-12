// JavaScript for dropdown menu functionality

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
});
