document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navMenu = document.getElementById("collapse-navbar");
    const yearSpan = document.getElementById("year");

    // Ensure toggleNavbar is globally available
    window.toggleNavbar = function () {
        if (navMenu) {
            navMenu.classList.toggle("hidden");
            navMenu.classList.toggle("opacity-0");
            navMenu.classList.toggle("opacity-100");
        } else {
            console.error("Element with ID 'collapse-navbar' not found.");
        }
    };

    function toggleNavbarBackground() {
        if (document.documentElement.scrollTop > 50) {
            navbar.classList.add("bg-gray-800", "shadow-lg");
            navbar.classList.remove("bg-transparent");
        } else {
            navbar.classList.add("bg-transparent");
            navbar.classList.remove("bg-gray-800", "shadow-lg");
        }

        // Hide mobile menu when scrolling
        if (navMenu && !navMenu.classList.contains("hidden")) {
            navMenu.classList.add("hidden", "opacity-0");
            navMenu.classList.remove("opacity-100");
        }
    }

    // Add event listener for scrolling
    document.addEventListener("scroll", toggleNavbarBackground, { passive: true });

    // Update year dynamically
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Element with ID 'year' not found.");
    }
});