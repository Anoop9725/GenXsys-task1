// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    let triggerPoint = window.innerHeight - 100;

    revealElements.forEach((el) => {
        let top = el.getBoundingClientRect().top;

        if (top < triggerPoint) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
