console.log("✅ JavaScript is running from assets/js/script.js!");

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default scrolling behavior

            // Hide all sections
            sections.forEach(section => section.style.display = "none");

            // Remove active class from all links
            links.forEach(l => l.classList.remove("active"));

            // Show the selected section
            const sectionId = this.getAttribute("data-section");
            document.getElementById(sectionId).style.display = "block";

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});

document.getElementById("toggle-feedback").addEventListener("click", function () {
    let moreFeedback = document.getElementById("more-feedback");
    if (moreFeedback.style.display === "none") {
        moreFeedback.style.display = "block";
        this.textContent = "See Less";
    } else {
        moreFeedback.style.display = "none";
        this.textContent = "See More";
    }
});
