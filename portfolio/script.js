// Highlight the active navbar link based on the current page
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
