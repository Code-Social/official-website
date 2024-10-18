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
    // Profile creation functionality
document.addEventListener("DOMContentLoaded", () => {
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