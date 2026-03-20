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
