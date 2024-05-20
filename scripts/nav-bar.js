document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert navbar
    fetch("nav-bar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-bar").innerHTML = data;

            // Inject CSS to make the navbar sticky
            const navbar = document.getElementById("navbar");
            navbar.style.position = "fixed";
            navbar.style.top = "0";
            navbar.style.left = "0";
            navbar.style.right = "0";
            navbar.style.zIndex = "1000"; // Ensure it's above other content
        });
});
