async function loadHTML(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (element) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const content = await response.text();
                element.innerHTML = content;
            } else {
                console.error(`Failed to load ${filePath}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetching ${filePath}:`, error);
        }
    }
}

// Load navbar and footer
loadHTML("navbar", "navbar.html");
loadHTML("footer", "footer.html");