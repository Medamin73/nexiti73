// NAVIGATION LOGO SCROLL TOP
$(".logo").on("click", function (e) {
  e.preventDefault();
  $(".nav-toggle").removeClass("open");
  $(".menu-left").removeClass("collapse");
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    750,
    "easeInOutQuad"
  );
});
// LINKS TO ANCHORS
$('a[href^="#"]').on("click", function (event) {
  var $target = $(this.getAttribute("href"));

  if ($target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      750,
      "easeInOutQuad"
    );
  }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$(".nav-toggle").on("click", function () {
  $(this).toggleClass("open");
  $(".menu-left").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".menu-left a").on("click", function () {
  $(".nav-toggle").removeClass("open");
  $(".menu-left").removeClass("collapse");
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.

  lastScrollTop = st;
  if (st == 0) {
    $("header").removeClass("hide-nav").addClass("show-nav");
  } else {
    // $("header").removeClass("show-nav");
    // $(".nav-toggle").removeClass("open");
    //  $(".menu-left").removeClass("collapse");
  }
}

/// images js
const slides = document.querySelectorAll(".top");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true; // Auto scroll
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Auto slide
if (auto) {
  // Run next slide at interval time
  setInterval(nextSlide, intervalTime);
}

// fin images js
