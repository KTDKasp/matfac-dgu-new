document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".header__mobile-menu-button").addEventListener("click", function() {
        document.getElementById("header").classList.toggle("open");
    });

    document.querySelectorAll(".nav__item").forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("active");
        });
    });
});