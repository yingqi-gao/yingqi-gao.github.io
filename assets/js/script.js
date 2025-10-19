'use strict';

console.log("✅ JavaScript is running from assets/js/script.js!");



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// Navbar toggle for mobile
const navbarToggle = document.querySelector("[data-navbar-toggle]");
const navbarList = document.querySelector("[data-navbar-list]");

if (navbarToggle && navbarList) {
  navbarToggle.addEventListener("click", function () {
    elementToggleFunc(navbarToggle);
    elementToggleFunc(navbarList);

    // Update aria-expanded attribute
    const isExpanded = navbarList.classList.contains("active");
    navbarToggle.setAttribute("aria-expanded", isExpanded);

    // Remove focus to reset button appearance
    this.blur();
  });

  // Close mobile menu when a nav link is clicked
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (navbarList.classList.contains("active")) {
        elementToggleFunc(navbarToggle);
        elementToggleFunc(navbarList);
        navbarToggle.setAttribute("aria-expanded", false);
      }
    });
  });
}



// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebarBtnText = sidebarBtn.querySelector("span"); // Selects the text inside the button
const sidebarBtnIcon = sidebarBtn.querySelector("ion-icon"); // Selects the icon inside the button

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);

    // Toggle button text and icon
    if (sidebar.classList.contains("active")) {
        sidebarBtnText.textContent = "Hide Contacts";
        sidebarBtnIcon.setAttribute("name", "chevron-up"); // Change to up arrow
    } else {
        sidebarBtnText.textContent = "Show Contacts";
        sidebarBtnIcon.setAttribute("name", "chevron-down"); // Change back to down arrow
    }
    
    // 🔹 Remove focus to reset button color
    this.blur();
});

// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



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


// Select all navigation links and page sections
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links
navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // Remove "active" from all links, then activate the clicked one
    navigationLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // Scroll to the top
    window.scrollTo(0, 0);
  });
});

