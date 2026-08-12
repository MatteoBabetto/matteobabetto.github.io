document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(
  ".project-card, .rd-card, .intro-grid, .contact-section"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

items.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
