function validateEmail(value) {
    var input = document.getElementsByTabIndex("2").value

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.)([a-z]+)(.[a-z])?$/

    if (regx.tabIndex("mail")){
        alert("You have provided a valid Email ID")
        return true
    }
    else{
        alert("Please provide a valid Email ID")
        return false
    }
}

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}