// Reveal animations on scroll
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    user_name: this.user_name.value,
    user_email: this.user_email.value,
    message: this.message.value
  };
  
  // Simple form validation
  if (!formData.user_name || !formData.user_email || !formData.message) {
    document.getElementById('form-status').textContent = 'Please fill in all fields.';
    document.getElementById('form-status').style.color = '#e74c3c';
    return;
  }
  
  if (!isValidEmail(formData.user_email)) {
    document.getElementById('form-status').textContent = 'Please enter a valid email address.';
    document.getElementById('form-status').style.color = '#e74c3c';
    return;
  }
  
  // Show success message (you can integrate EmailJS here)
  document.getElementById('form-status').textContent = 'Thank you for your message! I will get back to you soon.';
  document.getElementById('form-status').style.color = '#27ae60';
  
  // Reset form
  this.reset();
  
  // Clear message after 5 seconds
  setTimeout(() => {
    document.getElementById('form-status').textContent = '';
  }, 5000);
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add active class to navigation links on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
});
