
const services = document.querySelector(".services");
let servicesButtons = services.querySelectorAll(".services-button-link");
let servicesSlides = services.querySelectorAll(".service-content");

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
