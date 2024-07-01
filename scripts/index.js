// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", () => {
  // Scroll to the top of the page with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Show or hide the button based on the scroll position
window.addEventListener("scroll", () => {
  // If the scroll position is greater than or equal to 500 pixels, show the button, otherwise hide it
  if (window.scrollY >= 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Sticky nav-bar

const navbar = document.getElementById("navbar");
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.left = "0";
            navbar.style.right = "0";
            navbar.style.zIndex = "1000"; 

            window.addEventListener("scroll", () => {
                const scrolled = window.scrollY;
                if (scrolled > 0) {
                    navbar.classList.add("bg-white-500"); 
                } else {
                    navbar.classList.remove("bg-white-500");
                }
            });

// Fetch footer
document.addEventListener('DOMContentLoaded', function() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-section').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
});