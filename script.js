const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function page4animation() {
  var ct = document.querySelector("#fixed-image");
  var elemc = document.querySelector("#elem-container");
  elemc.addEventListener("mouseenter", function () {
    ct.style.display = "block";
  });
  var elemc = document.querySelector("#elem-container");
  elemc.addEventListener("mouseleave", function () {
    ct.style.display = "none";
  });

  var elem1 = document.querySelector("#elem1");
  elem1.addEventListener("mouseenter", function () {
    var image = elem1.getAttribute("data-image");
    ct.style.backgroundImage = `url(${image})`;
  });
  var elems = document.querySelectorAll("#elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      ct.style.backgroundImage = `url(${image})`;
    });
  });
}
function swiperanimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
  });
}
swiperanimation();
page4animation();
var menu = document.querySelector("#nav h2");
var navimg = document.querySelector("nav img");
var full = document.querySelector("#fullscr");
menu.addEventListener("click", function () {
  full.style.top = 0;
  navimg.style.opacity = 0;
});
var swiper = document.querySelector(".main");
var cursor = document.querySelector("#cursor");
swiper.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 50,
    y: dets.y - 50,
  });
});
