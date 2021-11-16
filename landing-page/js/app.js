/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// creating list items
function createListItem() {
  for (sec of sections) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href="${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
    navList.appendChild(listItem);
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
createListItem();

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
navList.addEventListener("click", (sec) => {
  sec.preventDefault();
  if (sec.target.dataset.nav) {
    document
      .getElementById(`${sec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${sec.target.dataset.nav}`;
    }, 170);
  }
});
