'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function (currentSlider) {

  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
  let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  currentSlider.addEventListener("wheel", function (event) {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });


  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

// public/mouse-follower.js

(function () {
  var e = document.createElement('div');
  e.className = 'mouse-follower';
  document.body.appendChild(e);

  var follower = document.querySelector('.mouse-follower');
  var size = 10;  // size of the mouse follower

  // Function to follow mouse
  document.addEventListener('mousemove', function (event) {
    follower.style.left = (event.pageX - size / 2) + 'px';
    follower.style.top = (event.pageY - size / 2) + 'px';
  });

  // Customize appearance
  follower.style.width = size + 'px';
  follower.style.height = size + 'px';
  follower.style.borderRadius = '50%';
  follower.style.position = 'absolute';
  follower.style.pointerEvents = 'none';
  follower.style.zIndex = '9999';
  follower.style.transition = 'all 0.1s ease-out';
  follower.style.background = '#FFFFFF'; // inner color
})();
const lenis = new Lenis({
  duration: 0.1,
  easing: (t) => t,
  smooth: true,
});

// Smooth scroll to top function
document.getElementById("scroll-arrow").addEventListener("click", () => {
  lenis.scrollTo(0, { duration: 1, easing: (t) => t });
});

// Show or hide the arrow based on scroll position
window.addEventListener("scroll", () => {
  const arrowContainer = document.getElementById("scroll-arrow");
  if (window.scrollY > 200) { // Adjust this value for when to show the arrow
      arrowContainer.classList.add("arrow-visible");
      gsap.to(arrowContainer, { rotation: 180, yoyo: true, repeat: -1, duration: 0.5 }); // Rotation effect
  } else {
      arrowContainer.classList.remove("arrow-visible");
      gsap.killTweensOf(arrowContainer); // Stop the animation when arrow is hidden
      gsap.set(arrowContainer, { rotation: 0 }); // Reset rotation
  }
});

// Request animation frame for Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
