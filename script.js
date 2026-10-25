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
  // Find all the blocks we want to animate
  const revealElements = document.querySelectorAll(
    ".movie-card, .award-item, .work-item, .timeline-item, .book-card, .contact-block, .yt-card"
  );

  // Add the hidden class to them initially
  revealElements.forEach((el) => el.classList.add("reveal"));

  // Set up the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Tell the observer to watch all the elements
  revealElements.forEach((el) => observer.observe(el));
});