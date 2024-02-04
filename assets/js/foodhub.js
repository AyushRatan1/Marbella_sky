
document.addEventListener("DOMContentLoaded", function () {
  const animatedText1 = document.getElementById("animated-text");
  const animatedText2 = document.getElementById("animated-text-2");

  // Check if the screen width is less than a certain value (e.g., 600px for mobile screens)
  const isMobile = window.innerWidth < 600;

  // Call the appropriate animation function based on the screen size
  if (isMobile) {
    animateMobileTextSequence(animatedText1, animatedText2);
  } else {
    animateDesktopTextSequence(animatedText1, animatedText2);
  }
});

function animateDesktopTextSequence(animatedText1, animatedText2) {
  // Create a timeline with anime.js for the desktop animation sequence
  anime.timeline()
    .add({
      targets: animatedText1,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
    })
    .add({
      targets: animatedText1,
      opacity: [1, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
    })
    .add({
      targets: animatedText2,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
    })
    .add({
      targets: animatedText2,
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 5000,
    })
    .add({
      targets: animatedText1,
      opacity: [1, 1],
      easing: "easeInOutQuad",
      duration: 1000,
    })
    .add({
      targets: animatedText1,
      opacity: [1, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 2000,
      complete: function(anim) {
        // Animation complete, do something here if needed
      }
    });
}

function animateMobileTextSequence(animatedText1, animatedText2) {
  // Create a timeline with anime.js for the mobile animation sequence
  anime.timeline()
    .add({
      targets: animatedText1,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1500,
      delay:7500,
    })
    .add({
      targets: animatedText2,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1500,
      
    })
    .add({
      targets: animatedText1,
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 1000,
    })
    .add({
      targets: animatedText2,
      opacity: [1, 0],
      easing: "easeInOutQuad",
      duration: 1000,
      complete: function(anim) {
        // Animation complete, do something here if needed
      }
    });
}


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
// Function to open drinks popup
function openDrinksPopup() {
  document.getElementById("drinks-popup").style.display = "block";
}

// Function to close drinks popup
function closeDrinksPopup() {
  document.getElementById("drinks-popup").style.display = "none";
}



// JavaScript for toggling the menu
// JavaScript for toggling the menu
function toggleMenu() {
  var menu = document.getElementById("navbarMenu");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}

// JavaScript to detect mobile device and add toggleable options
if (/Mobi|Android/i.test(navigator.userAgent)) {
  var navbarMenu = document.getElementById("navbarMenu");

  // Add your toggleable options here
  var options = ["Option 1", "Option 2", "Option 3"];

  options.forEach(function(option) {
    var li = document.createElement("li");
    li.textContent = option;
    li.classList.add("nav-item");
    navbarMenu.appendChild(li);
  });
}

  
  
 


