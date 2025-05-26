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
