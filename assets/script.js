/*!
 * FCC Website Javascript
/*!
 * script.js
 * Author: M.R.
 * Description: Main javascript file for the FCC Website.
 * Last updated: 2025-27-2025
 */

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

$(function () {
  const $track = $(".carousel-track");
  const $slides = $(".carousel-slide");
  const slideWidth = $slides.outerWidth(true);
  let currentIndex = 0;
  const visibleSlides = 2; // Change to 1 for mobile if needed
  const totalSlides = $slides.length;

  function updateCarousel() {
    $track.css("transform", `translateX(-${currentIndex * slideWidth}px)`);
  }

  $(".carousel-arrow.left").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  $(".carousel-arrow.right").click(function () {
    if (currentIndex < totalSlides - visibleSlides) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Optional: Responsive adjustment
  $(window).on("resize", function () {
    updateCarousel();
  });
});

// Animate progress bar
(function () {
  var bar = document.getElementById("preloader-bar");
  var progress = 0;
  var interval = setInterval(function () {
    progress += Math.random() * 18 + 7; // random step for effect
    if (progress > 100) progress = 100;
    if (bar) bar.style.width = progress + "%";
    if (progress >= 100) clearInterval(interval);
  }, 220);
})();

window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  var bar = document.getElementById("preloader-bar");
  if (bar) bar.style.width = "100%";
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }
});
