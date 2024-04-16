let header = document.querySelector('.header');

if (scrollY > 200) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}

document.addEventListener('scroll', function () {
    if (scrollY > 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}) 

let homeSwiper = new Swiper('.home .swiper', {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    parallax: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
    breakpoints: {
        1200: {
            direction: "vertical"
        }
    },
    pagination: {
        el: '.home .swiper_pagination',
        clickable: true,
    }
})

let fraction = document.querySelector('.home .swiper_fraction');
for (let i = 0; i < homeSwiper.slides.length; i++) {
    let btn = document.createElement('button');
    btn.textContent = i < 10 ? `0${i}` : i;
    if (i == 0) {
        btn.classList.add('active');
    }
    fraction.appendChild(btn);
    btn.onclick = () => {
        homeSwiper.slideTo(i)
    }
}

homeSwiper.on('slideChange', function (e) {
    let i = homeSwiper.activeIndex;
    document.querySelectorAll('.home .swiper_fraction button').forEach((el, idx) => {
        if (i == idx) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
});

let bars = document.querySelector('header .bars');
let mobileMenu = document.querySelector('.mobile_menu');
let menuLink = document.querySelectorAll('.mobile_menu li a');

bars.onclick = () => {
    mobileMenu.classList.toggle('active');
    bars.classList.toggle('active');
}

menuLink.forEach(el => {
    el.onclick = () => {
        mobileMenu.classList.remove('active');
        bars.classList.remove('active');
    }
})

let section = document.querySelectorAll('.robot');

section.forEach(el => {
    let showMore = el.querySelector('.robot .show_more')
    let description = el.querySelector('.robot__left p');
    
    showMore.onclick = () => {
        description.classList.add('active');
        showMore.classList.add('hidden')
    }
})
