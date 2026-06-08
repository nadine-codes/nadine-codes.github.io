// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    // Close the menu when a link is tapped (mobile)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // Set the current year in any footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form: friendly client-side confirmation (no backend needed)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const note = document.getElementById("form-note");
      const name = document.getElementById("name").value.trim();
      if (note) {
        note.textContent =
          "Thanks" + (name ? ", " + name : "") +
          "! Your message has been noted. You can also reach me directly by email.";
        note.classList.add("ok");
      }
      form.reset();
    });
  }
});
