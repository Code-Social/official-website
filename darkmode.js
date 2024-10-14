// Mock localStorage for Node.js
if (typeof localStorage === 'undefined' || localStorage === null) {
    global.localStorage = {
        getItem: function (key) {
            return this[key];
        },
        setItem: function (key, value) {
            this[key] = value;
        },
        removeItem: function (key) {
            delete this[key];
        }
    };
}


if (typeof document === 'undefined') {
    global.document = {
        getElementById: function (id) {
            console.log(`Mocking document.getElementById for id: ${id}`);
            return {
                addEventListener: function (event, callback) {
                    console.log(`Mocking addEventListener for event: ${event}`);
                }
            };
        },
        body: {
            classList: {
                add: function (className) {
                    console.log(`Mocking document.body.classList.add for class: ${className}`);
                },
                remove: function (className) {
                    console.log(`Mocking document.body.classList.remove for class: ${className}`);
                }
            }
        }
    };
}
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');


const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    updateThemeSwitchText(); 
};


const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    updateThemeSwitchText(); 
};


const updateThemeSwitchText = () => {
    themeSwitch.textContent = darkmode === "active" ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙";
};


if (darkmode === "active") {
    enableDarkMode();
} else {
    disableDarkMode();
}


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode === "active" ? disableDarkMode() : enableDarkMode();
});

// Update button text on initial load
updateThemeSwitchText();
