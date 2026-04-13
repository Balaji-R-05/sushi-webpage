import AOS from "aos";
import "aos/dist/aos.css"

// Initialize AOS
AOS.init({
    duration: 1000,
    offset: 100
});

// Mobile menu logic
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector(".header__menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("header__menu--active");
    });

    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("header__menu--active");
        });
    });
}

// Food filtering logic
const filterBtns = document.querySelectorAll(".popular-foods__filter-btn");
const foodCards = document.querySelectorAll(".popular-foods__card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        foodCards.forEach(card => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                card.style.display = "flex";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 10);
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
});