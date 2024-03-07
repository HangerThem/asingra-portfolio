const navbar = document.querySelector(".navbar");
const form = document.querySelector("[data-form]");
const dialog = document.querySelector("[data-dialog]");
const closeButton = document.querySelector("[data-close]");
const hamburger = document.querySelector("[data-hamburger]");
const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll("[data-nav] a");

let isOpen = false;

const toggleScroll = (isHidden) => {
  document.body.style.overflow = isHidden ? "hidden" : "auto";
};

const toggleNavbarScrolled = (isScrolled) => {
  if (isScrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const toggleNavOpen = (isOpen) => {
  if (isOpen) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
};

window.addEventListener("scroll", () => {
  toggleNavbarScrolled(window.scrollY > 0);
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.showModal();
  toggleScroll(true);
  e.target.reset();
});

closeButton?.addEventListener("click", () => {
  dialog.close();
  toggleScroll(false);
});

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  toggleNavOpen(isOpen);
  toggleScroll(isOpen);
  toggleNavbarScrolled(!isOpen && window.scrollY > 0);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavOpen(false);
    toggleScroll(false);
    toggleNavbarScrolled(true);
    isOpen = false;
  });
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
});
