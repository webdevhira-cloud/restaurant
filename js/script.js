// Mobile Navbar Toggle

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
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
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});
window.addEventListener("load", () => {

    document.querySelector(".loader").classList.add("hide");

});
// ================= GALLERY LIGHTBOX =================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = image.src;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove("active");
    }
});
// ================= CONTACT FORM =================

const form = document.querySelector("#contact-form");
const message = document.querySelector(".form-message");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        message.style.display = "block";
        message.textContent = "✅ Thank you! Your message has been sent successfully.";

        form.reset();

        setTimeout(() => {
            message.style.display = "none";
        }, 3000);

    });

}
// ================= SCROLL PROGRESS BAR =================

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});