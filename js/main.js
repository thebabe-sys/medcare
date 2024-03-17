
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.close-icon'); // Select the close icon

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        closeIcon.classList.toggle('active'); // Toggle the close icon
    });

    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInsideMobileMenu = mobileMenu.contains(event.target);
        const isClickOnHamburgerButton = hamburgerButton.contains(event.target);

        if (!isClickInsideMobileMenu && !isClickOnHamburgerButton) {
            mobileMenu.classList.remove('active');
            closeIcon.classList.remove('active'); // Hide the close icon
        }
    });

    // Close the mobile menu on scroll
    window.addEventListener('scroll', () => {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            closeIcon.classList.remove('active'); // Hide the close icon
        }
    });
});

