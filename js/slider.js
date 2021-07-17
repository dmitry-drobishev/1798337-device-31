
const slider = document.querySelector(".slider");
let sliderButtons = slider.querySelectorAll(".slider-buttons-list .slider-button");
let sliderSlides = slider.querySelectorAll(".slider .slide");
let sliderActiveSlide = slider.querySelector(".slider .slide-active");
let sliderActiveButton = slider.querySelector(".slider-buttons-list .current-slide");

sliderButtons.forEach(function(element, index) {

  element.addEventListener("click", function() {

    sliderActiveSlide = slider.querySelector(".slider .slide-active");
    sliderActiveSlide.classList.remove("slide-active");
    sliderActiveButton = slider.querySelector(".slider-buttons-list .current-slide");
    sliderActiveButton.classList.remove("current-slide");
    sliderSlides[index].classList.add("slide-active");
    sliderButtons[index].classList.add("current-slide");
  });
});



