// Dark mode toggle
const toggleButton = document.getElementById('theme-toggle');
const toggleIcon = toggleButton.querySelector('i');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleIcon.classList.toggle('fa-moon');
    toggleIcon.classList.toggle('fa-sun');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
const typed = new Typed('#typed', {
    strings: ['Backend Developer', 'Software Engineer', 'Cloud Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    }
});
