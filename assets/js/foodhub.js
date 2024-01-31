
document.addEventListener('DOMContentLoaded', function () {
  const carouselInner = document.querySelector('.carousel-inner');
  const images = document.querySelectorAll('.carousel-inner img');
  const totalImages = images.length;
  const imageWidth = images[0].clientWidth;
  const carouselWidth = document.querySelector('.carousel').clientWidth;
  const visibleImages = 6; // Number of images visible at a time
  let counter = 0;

  setInterval(() => {
    counter++;
    if (counter >= totalImages - visibleImages + 1) {
      counter = 0;
    }
    carouselInner.style.transition = 'transform 1s ease';
    carouselInner.style.transform = `translateX(-${counter * (carouselWidth / visibleImages)}px)`;
  }, 3000); // Adjust speed (in milliseconds) as needed
});

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

  function toggleDarkMode() {
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');

    if (lightMode.disabled) {
        lightMode.disabled = false;
        darkMode.disabled = true;
    } else {
        lightMode.disabled = true;
        darkMode.disabled = false;
    }
}


function openPopup() {
  // Show the popup
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  // Hide the popup
  document.getElementById("popup").style.display = "none";
}



  
  
 


