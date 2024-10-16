document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    // Fetching form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const hours = document.querySelector('input[name="hours"]:checked');
    const motivation = document.getElementById('motivation');
    const experience = document.getElementById('experience');
    const roles = document.querySelectorAll('input[name="roles"]:checked');
    const codeConduct = document.getElementById('code-conduct');
    const infoAccuracy = document.getElementById('info-accuracy');

    // Validation flags
    let valid = true;
    let errorMessage = "";

    // Name validation (ensure not empty)
    if (name.value.trim() === "") {
        valid = false;
        errorMessage += "Name is required.\n";
    }

    // Email validation (simple regex for format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        errorMessage += "Please provide a valid email address.\n";
    }

    // Mobile number validation (simple regex for 10-digit format)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile.value)) {
        valid = false;
        errorMessage += "Mobile number must be 10 digits.\n";
    }

    // Hours validation (check if any radio button is selected)
    if (!hours) {
        valid = false;
        errorMessage += "Please select how many hours you can work per week.\n";
    }

    // Motivation validation (ensure not empty)
    if (motivation.value.trim() === "") {
        valid = false;
        errorMessage += "Motivation is required.\n";
    }

    // Experience validation (ensure not empty)
    if (experience.value.trim() === "") {
        valid = false;
        errorMessage += "Please mention your previous volunteering or work experience.\n";
    }

    // Roles validation (ensure at least one checkbox is selected, max 2)
    if (roles.length === 0) {
        valid = false;
        errorMessage += "Please select at least one role.\n";
    } else if (roles.length > 2) {
        valid = false;
        errorMessage += "You can select a maximum of 2 roles.\n";
    }

    // Code of conduct validation (checkbox must be checked)
    if (!codeConduct.checked) {
        valid = false;
        errorMessage += "You must agree to the Code of Conduct.\n";
    }

    // Information accuracy validation (checkbox must be checked)
    if (!infoAccuracy.checked) {
        valid = false;
        errorMessage += "You must confirm that the information provided is accurate.\n";
    }

    // If any validation failed, show an alert
    if (!valid) {
        alert(errorMessage);
    } else {
        // If everything is valid, submit the form (or you can add custom logic here)
        alert("Form submitted successfully!");
        event.target.submit(); // Submit the form programmatically if all validations pass
    }
});
