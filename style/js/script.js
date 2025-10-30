// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Header Scroll Effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navLinks.classList.remove("active");
    }
  });
});

// Animation on Scroll
const fadeElements = document.querySelectorAll(".fade-in-up");

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial state for fade elements
fadeElements.forEach((element) => {
  element.style.opacity = 0;
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start
showSlide(currentSlide);
setInterval(nextSlide, 3500);

function updateHeight() {
  const activeSlide = document.querySelector(".slide.active");
  const slider = document.querySelector(".testimonials-slider");
  slider.style.height = activeSlide.offsetHeight + "px";
}

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
setInterval(updateHeight, 500); // jika slider auto-rotate
