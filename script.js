// Navbar scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const unit = document.getElementById('unit').value;
  const message = document.getElementById('message').value.trim();

  // Map unit values to readable names
  const unitNames = {
    studio: 'ASA Studio (Fotografi)',
    spc: 'ASA SPC (Service & Komponen)',
    other: 'Lainnya / Umum'
  };

  // Create WhatsApp message
  const waMessage = encodeURIComponent(
    `Halo ASA Pro!%0A%0A` +
    `Nama: ${name}%0A` +
    `Kontak: ${email}%0A` +
    `Unit: ${unitNames[unit] || unit}%0A%0A` +
    `Pesan:%0A${message}`
  );

  // Ganti nomor di bawah dengan nomor WhatsApp resmi ASA Pro
  const waNumber = '6281234567890'; // <-- GANTI DENGAN NOMOR ASLI

  // Open WhatsApp
  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');

  // Optional: reset form
  // contactForm.reset();
});

// Smooth reveal on scroll (simple intersection observer)
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.about-card, .why-card, .unit-content, .unit-visual, .contact-form, .contact-info').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// When visible class is added
const style = document.createElement('style');
style.textContent = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);