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
// Navbar Scroll Effect
// ===============================

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 100){
        header.classList.add("hide");
    }else{
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;

});
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
