import './style.scss';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


import { initTheme } from './utils/theme';
import { initTypingEffect } from './utils/animations';
import { initParticles } from './utils/particles';
import { onScrollAimation } from './utils/gsap';


document.getElementById('app').innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Skills()}
  ${Projects()}
  ${Contact()}
  ${Footer()}
`;

// Initialize functionality
initTheme();
initTypingEffect();
initParticles();
onScrollAimation();

function mobileMenuToggle(){



// Mobile menu functionality
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
if (mobileMenu) {
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Close mobile menu when close button is clicked
if (mobileMenuClose && mobileMenu && menuToggle) {
  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

}
mobileMenuToggle();