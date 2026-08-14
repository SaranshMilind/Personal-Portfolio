const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Reveal on scroll ---------- */
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
} else {
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
}

/* ---------- Smooth scrolling for nav links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length <= 1) return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      const navLinks = document.getElementById('navLinks');
      const navToggle = document.getElementById('navToggle');
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    }
  });
});

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* ---------- Active nav link + navbar background on scroll ---------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a:not(.btn)');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });

  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---------- Contact form handling ---------- */
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    user_name: this.user_name.value.trim(),
    user_email: this.user_email.value.trim(),
    message: this.message.value.trim()
  };

  if (!formData.user_name || !formData.user_email || !formData.message) {
    status.textContent = '⚠ All fields are required.';
    status.style.color = '#FF3B3F';
    return;
  }

  if (!isValidEmail(formData.user_email)) {
    status.textContent = '⚠ Please enter a valid email address.';
    status.style.color = '#FF3B3F';
    return;
  }

  status.textContent = '✓ Transmission received. I will get back to you soon.';
  status.style.color = '#6EE39C';

  this.reset();

  setTimeout(() => { status.textContent = ''; }, 6000);
});

/* ---------- Ambient particle field ---------- */
(function particles() {
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particlesArr = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const count = Math.min(60, Math.floor((w * h) / 28000));
  const palette = ['rgba(245,197,66,0.5)', 'rgba(46,99,214,0.45)', 'rgba(255,59,63,0.35)'];

  for (let i = 0; i < count; i++) {
    particlesArr.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.4,
      vy: Math.random() * 0.15 + 0.03,
      vx: (Math.random() - 0.5) * 0.06,
      color: palette[Math.floor(Math.random() * palette.length)]
    });
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    particlesArr.forEach(p => {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();
