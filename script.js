(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }));
  }

  // Track important CTA clicks as GA4 events when gtag is configured.
  document.querySelectorAll("[data-track]").forEach(element => {
    element.addEventListener("click", function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", {
          event_category: "engagement",
          event_label: element.getAttribute("data-track"),
          link_text: (element.textContent || "").trim().slice(0, 100)
        });
      }
    });
  });

  // The contact link uses email. If the placeholder address has not been
  // replaced, avoid sending visitors to a non-working example address.
  document.querySelectorAll('a[href*="hello@memoryanchors.example"]').forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = "Contact email is a placeholder. Replace it with your team's email in index.html before publishing.";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 5200);
      }
    });
  });
})();
