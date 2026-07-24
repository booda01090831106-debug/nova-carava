// ===============================
// Explore Button
// ===============================

const exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", () => {
    document.getElementById("caravans").scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// Navbar Hide On Scroll
// ===============================

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;

});


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// ===============================
// Close Menu After Click
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});
