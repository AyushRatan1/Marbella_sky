'use strict';

// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');

// Function to toggle the navbar and shopping cart
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

const cartToggleFunc = function () {
  shoppingCart.classList.toggle('active');
}

// Event listener for the navigation toggle button
navToggleBtn.addEventListener('click', function () {
  if (shoppingCart.classList.contains('active')) cartToggleFunc();
  navToggleFunc();
});

// Event listener for the cart toggle button
cartToggleBtn.addEventListener('click', function () {
  if (nav.classList.contains('active')) navToggleFunc();
  cartToggleFunc();
});

// Event listeners for nav links to close the navbar when a link is clicked
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}

// Event listener for scrolling to change the navbar appearance
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Fix for the navbar staying fixed at the top
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    nav.style.position = 'fixed';
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  } else {
    nav.style.position = 'absolute';
    nav.style.backgroundColor = 'transparent';
  }
});




  document.addEventListener("DOMContentLoaded", function () {
    // Get the animated text element
    const animatedText = document.getElementById("animated-text");

    // Animate the text using anime.js
    anime.timeline({ loop: true })
      .add({
        targets: animatedText,
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1000
      })
      .add({
        targets: animatedText,
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 1000,
        delay: 2000
      });
  });

