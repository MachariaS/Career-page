// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Back to Top Button Visibility
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.backgroundColor = "var(--white)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Animation on Scroll
const animateElements = () => {
  const elements = document.querySelectorAll(
    ".stat-item, .culture-card, .team-item, .pathway-card, .leadership-track, .program-card, .feature-card, .testimonial-card, .promise-item"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.85;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    }
  });
};

// Run animations on load and scroll
window.addEventListener("DOMContentLoaded", animateElements);
window.addEventListener("scroll", animateElements);

// Logo Replacement with actual IAN logo
window.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector(".logo img");
  // Replace this with the actual IAN logo URL when available
  // logoImg.src = "path/to/ian-logo.png";
});
