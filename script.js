function burgerIconNav() {
    // Fetch classes from HTML.
    const burgerIcon = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    // Click burger-icon to start function.
    burgerIcon.addEventListener("click", function() {
        // Navigation Appear.
        navLinks.classList.toggle("nav-active");
        // Burger bars rotate.
        burgerIcon.classList.toggle("rotate");
    });
}

burgerIconNav();