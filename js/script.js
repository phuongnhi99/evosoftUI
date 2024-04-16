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

const primaryItemMenu = document.querySelector('#primary-item-menu');
const expandedItemMenu = document.querySelector('#expanded-item-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const openMobileMenu = document.querySelector('#open-mobile-menu');
primaryItemMenu.addEventListener('click', function () {
    expandedItemMenu.classList.toggle('hidden');
    expandedItemMenu.classList.toggle('block');
});
mobileMenu.addEventListener('click', function () {
    console.log('click');
    openMobileMenu.classList.toggle('hidden');
    openMobileMenu.classList.toggle('block');
});