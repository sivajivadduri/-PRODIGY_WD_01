// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.square').forEach(square => {
        square.classList.toggle('dark-mode');
    });
    document.querySelectorAll('.circle').forEach(circle => {
        circle.classList.toggle('dark-mode');
    });
});

// Form Validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();  // Prevent form submission if validation fails
    }
});
