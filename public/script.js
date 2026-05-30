// Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Navbar Change on Scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector("header");
    if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}




document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Header Scroll Logic (Blur Effect)
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 20) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    });

    // 2. Active Page Highlighting Logic
    // Ye code current URL check karke sahi link ko 'blue theme' dega
    const currentLocation = location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentLocation || (currentLocation === "" && linkPath === "index.html")) {
            link.classList.add("active");
        }
    });
});

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}


// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

// Scroll reveal effect
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});

// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Certificate Modal Logic
function openCert(url) {
    const modal = document.getElementById('certModal');
    const frame = document.getElementById('certFrame');
    frame.src = url;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeCert() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    document.getElementById('certFrame').src = '';
    document.body.style.overflow = 'auto';
}

// Navbar shadow on scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('py-2', 'shadow-xl');
    } else {
        navbar.classList.remove('py-2', 'shadow-xl');
    }
};