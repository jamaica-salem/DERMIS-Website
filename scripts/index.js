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
