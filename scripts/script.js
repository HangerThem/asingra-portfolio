window.addEventListener("scroll", () => {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelector("[data-form]").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("[data-dialog]").showModal();
  document.body.style.overflow = "hidden";
  e.target.reset();
});

document.querySelector("[data-close]").addEventListener("click", () => {
  document.querySelector("[data-dialog]").close();
  document.body.style.overflow = "auto";
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
});
