window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");

  navbar.classList.toggle("black", window.scrollY > 15);
});
