document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert navbar
    fetch("nav-bar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-bar").innerHTML = data;
        });
});
