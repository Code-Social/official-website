document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = document.querySelectorAll(".navbar ul li");

  // Show/hide dropdowns on hover
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
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinksContainer = document.querySelector(".navbar ul");

  toggleButton.addEventListener("click", () => {
    navbarLinksContainer.classList.toggle("active"); // Toggle the 'active' class on the container (ul)
  });
});
