document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
     1. MOBILE HAMBURGER MENU
     ========================================== */
  const navbar = document.querySelector(".navbar");
  const hamburgerBtn = document.querySelector(".hamburger");

  // Only run if the button exists in the HTML
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      navbar.classList.toggle("menu-open");
      
      // Change icon between hamburger (☰) and close (✕)
      if (navbar.classList.contains("menu-open")) {
        hamburgerBtn.innerHTML = "✕";
      } else {
        hamburgerBtn.innerHTML = "☰";
      }
    });
  }

  /* ==========================================
     2. SCROLL REVEAL ANIMATIONS
     ========================================== */
  const revealElements = document.querySelectorAll(
    ".movie-card, .award-item, .work-item, .timeline-item, .book-card, .contact-block, .yt-card"
  );

  revealElements.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});