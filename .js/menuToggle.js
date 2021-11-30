const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const navActive = document.querySelector(".active");
const nav = document.querySelector(".active");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle(navActive);
   
})

document.querySelectorAll(".menuItem").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove(navActive);
        navMenu.classList.remove(navActive);
    }))
    
    if (display = mobileNav) {
        const mobileNav =  document.querySelector(".mobileNav");
    }
    else {
        const nav = document.querySelector(".active");
    }

