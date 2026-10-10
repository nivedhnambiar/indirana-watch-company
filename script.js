document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navCta = document.querySelector(".nav-cta");

  if (menuToggle && mainNav && navCta) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));

      mainNav.style.display = expanded ? "none" : "flex";
      mainNav.style.position = "absolute";
      mainNav.style.top = "82px";
      mainNav.style.left = "1rem";
      mainNav.style.right = "1rem";
      mainNav.style.flexDirection = "column";
      mainNav.style.alignItems = "flex-start";
      mainNav.style.padding = "1rem 1.2rem";
      mainNav.style.background = "rgba(255,255,255,0.96)";
      mainNav.style.border = "1px solid rgba(27, 29, 31, 0.12)";
      mainNav.style.borderRadius = "18px";
      mainNav.style.boxShadow = "0 22px 40px rgba(17,13,9,0.12)";
      navCta.style.display = expanded ? "none" : "inline-flex";
      navCta.style.position = "absolute";
      navCta.style.top = "calc(82px + 240px)";
      navCta.style.left = "1rem";
      navCta.style.right = "1rem";
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = newsletterForm.querySelector("button");
      if (button) {
        const originalText = button.textContent;
        button.textContent = "Subscribed";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          newsletterForm.reset();
        }, 1800);
      }
    });
  }
});
