// Pixel Portfolio — script.js

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (dark <-> light). Optional: persist in localStorage.
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  root.classList.toggle('light');
  // localStorage.setItem('pixel-theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Optional: restore theme from localStorage
// if (localStorage.getItem('pixel-theme') === 'light') root.classList.add('light');
