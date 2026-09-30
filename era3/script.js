const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


/* Анимация появления */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade");

        }

    });

}, {
    threshold: 0.15
});


cards.forEach(function(card) {

    observer.observe(card);

});