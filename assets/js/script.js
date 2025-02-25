console.log("✅ JavaScript is running from assets/js/script.js!");

console.log("✅ JavaScript is running from assets/js/script.js!");

document.addEventListener("DOMContentLoaded", function () {
    // 🔹 NAVIGATION FUNCTIONALITY
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

    // 🔹 SEE MORE / SEE LESS FEEDBACK FUNCTIONALITY
    const feedbackButton = document.getElementById("toggle-feedback");
    const moreFeedback = document.getElementById("more-feedback");

    if (feedbackButton && moreFeedback) {
        feedbackButton.addEventListener("click", function () {
            if (moreFeedback.style.display === "none" || moreFeedback.style.display === "") {
                moreFeedback.style.display = "block";
                this.textContent = "See Less";
            } else {
                moreFeedback.style.display = "none";
                this.textContent = "See More";
            }
        });
    }

    // 🔹 FOOTNOTE TOGGLE FUNCTIONALITY
    const footnoteButton = document.getElementById("toggle-footnote");
    const footnoteSection = document.getElementById("footnote-section");
    const mainContent = document.querySelector(".main-content"); // Select main content

    if (footnoteButton && footnoteSection && mainContent) {
        // 🔥 Ensure footnote is visible by default
        footnoteSection.style.display = "block";
        footnoteButton.textContent = "Hide Footnote";

        // Function to adjust content margin dynamically
        function adjustMargin() {
            let footnoteHeight = footnoteSection.offsetHeight;
            mainContent.style.marginTop = `${200 + footnoteHeight}px`; // Push content down
        }

        // Initial margin adjustment on page load
        adjustMargin();

        // Add event listener for toggling footnote
        footnoteButton.addEventListener("click", function () {
            let isVisible = footnoteSection.style.display === "block";

            if (isVisible) {
                footnoteSection.style.display = "none";
                footnoteButton.textContent = "Show Footnote";
                mainContent.style.marginTop = "200px"; // Reset margin when hidden
            } else {
                footnoteSection.style.display = "block";
                footnoteButton.textContent = "Hide Footnote";
                adjustMargin(); // Adjust margin when shown
            }
        });

        // Recalculate margin if window resizes (handles dynamic height changes)
        window.addEventListener("resize", adjustMargin);
    }
});

