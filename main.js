// ===================== NAVBAR SCROLL =====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===================== MOBILE MENU =====================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.innerHTML = navLinks.classList.contains('open') ? '&#10005;' : '&#9776;';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.innerHTML = '&#9776;';
    });
});

// ===================== REVEAL ON SCROLL =====================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===================== COUNTER ANIMATION =====================
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ===================== BOOKING FORM =====================
function openBooking() {
    const section = document.getElementById('booking');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function openBookingFor(service) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].text.startsWith(service)) {
                serviceSelect.selectedIndex = i;
                break;
            }
        }
    }
    openBooking();
}

function submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const formattedDate = date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
    const msg = `Thank you, <strong>${name}</strong>! Your <strong>${service}</strong> is booked for <strong>${formattedDate} at ${time}</strong>. We'll confirm via email shortly.`;

    document.getElementById('modalMessage').innerHTML = msg;
    document.getElementById('modalOverlay').classList.add('active');
    e.target.reset();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

// Set minimum date for inputs
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(inp => {
    inp.setAttribute('min', today);
});
