document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("header, footer, h1, h2, .projeto").forEach(el => {
        el.classList.toggle("dark-mode");
    });
});
