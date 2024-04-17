$(document).ready(function() {
    $(".menu-button").click(function() {
        $(this).parent().parent().find(".menu-expand").toggleClass("opacity-0");
        $(this).parent().parent().find(".menu-expand").toggleClass("opacity-100");
        $(this).toggleClass("active");
        $(this).toggleClass("text-gray-700");
        $(this).toggleClass("text-[#0174c3]");
        $(this).find("svg").toggleClass("rotate-180");
    });
    $(".mobile-menu-button-open").click(function() {
        $(".mobile-menu").toggleClass("hidden");
    });
    $(".mobile-menu-button-close").click(function() {
        $(".mobile-menu").toggleClass("hidden");
    });
    $(".mobile-menu-button").click(function() {
        $(this).find("svg").toggleClass("rotate-180");
        $(this).parent().find(".mobile-menu-expand").toggleClass("hidden");
    });
    $(".menu-footer-group").click(function () {
        $(this).parent().find("svg").toggleClass("rotate-180");
        $(this).parent().find("ul").toggleClass("hidden");
    });
    $(".sort-button").click(function () {
        $(this).parent().find("svg").toggleClass("rotate-180");
        $(".sort-expand").toggleClass("hidden");
    });
    $(".mobile-filter-button-open").click(function() {
        $(".mobile-filter").toggleClass("hidden");
    });
    $(".mobile-filter-button-close").click(function() {
        $(".mobile-filter").toggleClass("hidden");
    });
    $(".filter-button").click(function() {
        $(this).find("svg").toggleClass("rotate-180");
        $(this).parent().parent().find(".filter-expand").toggleClass("hidden");
    });
});
var swiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".productSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
    },
});

var swiper = new Swiper(".articleSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
    },
});