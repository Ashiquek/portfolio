// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// Scroll To Top Button
// ================================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";

    }

});

// ================================
// Scroll Reveal Animation
// ================================

const cards = document.querySelectorAll(
".glass-card,.skill-card,.timeline-card,.certificate-card,.project-card");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

};

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ================================
// Typing Effect
// ================================

const roles = [
    "Software Engineer",
    "Web Developer",
    "Programmer",
    "Computer Science Graduate"
];

let roleIndex = 0;
let charIndex = 0;

const title = document.querySelector(".hero-content h3");

function typeEffect() {

    if (!title) return;

    title.textContent = roles[roleIndex].substring(0, charIndex);

    charIndex++;

    if (charIndex > roles[roleIndex].length) {

        charIndex = 0;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

    }

}

setInterval(typeEffect, 150);

// ================================
// Console Message
// ================================

console.log("Muhammed Ashique K Portfolio Loaded Successfully");