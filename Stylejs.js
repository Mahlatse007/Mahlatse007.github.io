// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// Form validation
function validateForm() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all fields');
      return false;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return false;
    }

    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    document.querySelector('form').reset();
    return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

      // Close mobile menu if open
      document.querySelector('.mobile-menu').classList.add('hidden');
    });
});