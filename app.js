document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Hamburger Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".nav-link-mobile");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      if (mobileMenu.classList.contains("hidden")) {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
      } else {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
      });
    });
  }

  // 2. Filter Meals Functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const mealCards = document.querySelectorAll(".meal-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("bg-primary", "text-white");
        b.classList.add("bg-white", "text-gray-700");
      });
      btn.classList.add("bg-primary", "text-white");
      btn.classList.remove("bg-white", "text-gray-700");

      const filter = btn.getAttribute("data-filter");

      mealCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. Pricing Toggle Switcher (Monthly / Yearly)
  const toggleBtn = document.getElementById("toggle-billing");
  const toggleCircle = document.getElementById("toggle-circle");
  const starterPrice = document.getElementById("starter-price");
  const completePrice = document.getElementById("complete-price");

  let isYearly = false;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isYearly = !isYearly;
      if (isYearly) {
        toggleCircle.classList.add("translate-x-6");
        starterPrice.textContent = "319";
        completePrice.textContent = "519";
      } else {
        toggleCircle.classList.remove("translate-x-6");
        starterPrice.textContent = "399";
        completePrice.textContent = "649";
      }
    });
  }

  // 4. Form Submit Prevention
  const form = document.getElementById("cta-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for signing up! We will contact you soon.");
      form.reset();
    });
  }
});