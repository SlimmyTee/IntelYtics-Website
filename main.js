const swiper = new Swiper(".hero .swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 800,
    pagination: {
        el: ".swiper-pagination.hero-pagination",
        clickable: true,
    },
});
const swiper_support = new Swiper("#support .swiper", {
    loop: true,
    speed: 800,
    slidesPerView: "auto",
    autoplay: {
        delay: 100,
    },
    spaceBetween: 50,
});
const swiper_about = new Swiper("#about .swiper", {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 100,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
});
const swiper_testimonial = new Swiper("#testimonials .swiper", {
    speed: 800,
    slidesPerView: "auto",
    spaceBetween: 20,
});
const blue_box = document.querySelector("#about .grid .box.blue");
const orange_box = document.querySelector("#about .grid .box.orange");
const image = document.querySelector("#about .grid .img_wrapper");
const about_graphic_timeline_blue = gsap.timeline();
const about_graphic_timeline_orange = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
const ismobile = window.innerWidth < 500;

ScrollTrigger.create({ trigger: image, animation: about_graphic_timeline_blue });
ScrollTrigger.create({ trigger: image, animation: about_graphic_timeline_orange });

const nav = $("nav");

window.addEventListener("scroll", () => {
    window.scrollY > 60 ? nav.addClass("scrolled") : nav.removeClass("scrolled");
});

if (window.innerWidth < 768) {
    const nav_timeline = gsap.timeline({ paused: true });
    nav_timeline
        .to(".nav", { left: "0vw", opacity: 1, ease: "Power3.out" })
        .from(".nav li > a", { x: 100, opacity: 0, ease: "Power3.out", stagger: 0.125 })
        .from(".nav li .dropdown-menu a", { x: 100, opacity: 0, ease: "Power3.out" }, "-=0.125");

    $(".hamburger").click(() => {
        nav_timeline.play();
    });
    $(".hamburger-close").click(() => {
        nav_timeline.timeScale(1.5);
        nav_timeline.reverse();
    });
}

function ScrollAnim() {
    const scroll_anim = gsap.timeline({ repeat: -1 });

    scroll_anim
        .to(".scroll_anim .arrow svg", { height: 0, duration: 0 })
        .to(".scroll_anim .arrow svg", { top: "0%", duration: 0 })
        .to(".scroll_anim .arrow svg", { height: 80 })
        .to(".scroll_anim .arrow svg", { top: 100, delay: 1.5 }, "x")
        .to(
            ".scroll_anim .arrow svg",
            {
                height: 0,
                ease: "none",
                delay: 1.5,
            },
            "x"
        );
}
