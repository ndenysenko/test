import Splide from "./import/splide.min";

document.addEventListener( "DOMContentLoaded", function () {
    new Splide( ".splide", {
        pagination: false,
        arrow: true,
        perMove: 1,
        perPage: 3,
        gap: "3rem",
        breakpoints: {
            900: {
                perPage: 2
            },
            600: {
                perPage: 1,
            },
        },
    } ).mount();
} );


(() => {
    const menuBtnRef = document.querySelector("#nav__toggle");
    const mobileMenuRef = document.querySelector(".navbar--mobile");
    const mobileBtnClose = document.querySelector(".navbar--mobile__close-btn");
    const backdrop = document.querySelector(".backdrop");
    const links = document.querySelectorAll(".navbar__list--mobile .navbar__link");

    menuBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
    });

    mobileBtnClose.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
    });

    backdrop.addEventListener("click", (e) => {
        if (e.target === mobileMenuRef) {
            mobileMenuRef.classList.remove("is-open");
        }
    });

    links.forEach( (item) => { 
        item.addEventListener("click", (e) => {
            e.preventDefault();
            mobileMenuRef.classList.remove("is-open");
            document.querySelector(item.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                offsetTop: 20
            });
        });});
})();