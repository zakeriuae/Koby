// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(45, 36, 30, 0.9)';
        nav.style.padding = '15px 50px';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 50px';
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '20px';
        navLinks.style.background = 'rgba(45, 36, 30, 0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '4px';
    }
});
