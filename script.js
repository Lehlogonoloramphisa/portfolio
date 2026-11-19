document.documentElement.classList.add("js");

const menuButton = document.querySelector(".mobile-menu-button");
const primaryNav = document.querySelector("#primary-navigation");

function setMenuOpen(isOpen, { returnFocus = false } = {}) {
  if (!menuButton || !primaryNav) return;

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  primaryNav.classList.toggle("open", isOpen);

  if (!isOpen && returnFocus) menuButton.focus();
}

if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  primaryNav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('a[href^="#"]')) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, { returnFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Element && !event.target.closest(".site-header")) {
      setMenuOpen(false);
    }
  });

  window.matchMedia("(min-width: 1101px)").addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

document.querySelectorAll("[data-architecture]").forEach((diagram) => {
  const stages = [...diagram.querySelectorAll(".architecture-stage")];
  const detail = diagram.querySelector(".architecture-detail");

  stages.forEach((stage) => {
    stage.addEventListener("click", () => {
      stages.forEach((item) => item.setAttribute("aria-pressed", String(item === stage)));
      if (detail) detail.textContent = stage.dataset.description || "";
    });
  });
});

const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window && navLinks.length && sections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-24% 0px -62% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
