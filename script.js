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

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.3)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "none";
    }
});