// feedback

const feedbackLink = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal-message");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".modal-form");
const feedbackLogin = feedbackPopup.querySelector(".modal-name input");
const feedbackMail = feedbackPopup.querySelector(".modal-mail input");
const feedbackMessage = feedbackPopup.querySelector(".modal-textarea")

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    feedbackLogin.value = storage;
    feedbackMail.focus();
  } else {
    feedbackLogin.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackLogin.value || !feedbackMail.value || !feedbackMessage.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
        localStorage.setItem("name", feedbackLogin.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }
  }
});

// map

const mapLink = document.querySelector(".button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// slider

const slider = document.querySelector(".slider");
const sliderButtons = slider.querySelectorAll(".slider-buttons-list .slider-button");
const sliderSlides = slider.querySelectorAll(".slider .slide");
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

// services

const services = document.querySelector(".services");
const servicesButtons = services.querySelectorAll(".services-button-link");
const servicesSlides = services.querySelectorAll(".service-content");

servicesButtons.forEach(function(element, index) {
  element.addEventListener("click", function() {
    let servicesActiveButton = services.querySelector(".services-link-active");
    servicesActiveButton.classList.remove("services-link-active");
    let servicesActiveSlide = services.querySelector(".service-active");
    servicesActiveSlide.classList.remove("service-active");
    servicesSlides[index].classList.add("service-active");
    servicesButtons[index].classList.add("services-link-active");
  });
});