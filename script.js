
/* =====================================
   UGE DIGITAL UNIVERSE
   JavaScript - Main Functions
===================================== */

// 1. MOBILE NAVIGATION MENU
const menuToggle = document.querySelector(
  ".menu-toggle, .hamburger, #menuToggle"
);

const navigation = document.querySelector(
  ".nav-links, .navigation, nav"
);

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}



/* 2. UNIVERSAL SEARCH */

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchBtn");

const searchableCards = document.querySelectorAll(
  ".quick-card, .category-card, .tool-card, .card, .access-card, .feature-card, .universe-card"
);

function performSearch() {
  const searchText = searchInput.value.toLowerCase().trim();

  searchableCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    if (searchText === "" || cardText.includes(searchText)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Search pamene munthu akulemba
if (searchInput) {
  searchInput.addEventListener("input", performSearch);
}

// Search pamene munthu akudina 🔎
if (searchButton) {
  searchButton.addEventListener("click", performSearch);
}



// 3. BUTTON INTERACTIONS
const actionButtons = document.querySelectorAll(
  ".btn, .button, .action-btn"
);

actionButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const buttonText = button.textContent.trim();

    if (buttonText !== "") {
      console.log("Button clicked:", buttonText);
    }

  });

});


// 4. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    if (targetId && targetId !== "#") {

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    }

  });

});


// 5. FOOTER CURRENT YEAR
const yearElement = document.querySelector(
  "#currentYear, .current-year"
);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// 6. WEBSITE READY MESSAGE
document.addEventListener("DOMContentLoaded", function () {

  console.log(
    "UGE Digital Universe is ready!"
  );

});
