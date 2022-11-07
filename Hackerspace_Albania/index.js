const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const nav = document.querySelector("nav");
const underline = document.querySelector(".active-page");
const language = document.querySelector(".language-drop");
const eng = document.querySelector(".eng");
const dropdown = document.querySelector(".dropdown");
const scroll_language = document.querySelector(".scroll-language-drop");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");


window.onscroll = function() {
    document.querySelector(".mouse").style.display = "none";
    document.querySelector(".mouse-wheel").style.display = "none";
    nav.classList.add("scroll-active");
    navLinks.classList.add("text-scroll-active");
    underline.classList.remove("active-page");
    underline.classList.add("active-page-scroll-active");
    document.querySelector(".language-drop").style.display = "none";
    document.querySelector(".scroll-language-drop").style.display = "inline-block";
};

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    burger.classList.toggle("line-animation");
});

second.addEventListener("click", () => {
    second.classList.add("active");
    if(first.classList.contains("active")){
        first.classList.remove("active");
    }
});
first.addEventListener("click", () => {
    first.classList.add("active");
    if(second.classList.contains("active")){
        second.classList.remove("active");
    }
});

new Glider(document.querySelector('.glider'), {
    slidesToShow: 6,
    slidesToScroll: 2,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});

let media1 = window.matchMedia('(min-width: 1366px)');
if(media1.matches){
    eng.addEventListener("click", () => {
        dropdown.classList.toggle("open-dropdown");
        language.classList.toggle("rotate");
        scroll_language.classList.toggle("rotate");
    });
    let wrapper = document.querySelector("div.partners-carousel");
    wrapper.classList.remove("glider-contain");
    wrapper.classList.remove("multiple");
    let uldiv = document.querySelector("ul.partners-carousel");
    uldiv.classList.remove("glider");
}else{
    eng.addEventListener("click", () => {
        dropdown.classList.toggle("open-dropdown");
        language.classList.toggle("rotate");
        scroll_language.classList.toggle("rotate");
    });
    let wrapper = document.querySelector("div.partners-carousel");
    wrapper.classList.add("glider-contain");
    wrapper.classList.add("multiple");
    let uldiv = document.querySelector("ul.partners-carousel");
    uldiv.classList.add("glider");
}
