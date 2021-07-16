const slider = document.querySelector(".slider");
const slideButton1 = slider.querySelector(".slider-button-1");
const slideButton2 = slider.querySelector(".slider-button-2");
const slideButton3 = slider.querySelector(".slider-button-3");
const slide1 = slider.querySelector(".slide-1");
const slide2 = slider.querySelector(".slide-2");
const slide3 = slider.querySelector(".slide-3");

const services = document.querySelector(".services");
const servicesButton1 = services.querySelector(".services-button-1");
const servicesButton2 = services.querySelector(".services-button-2");
const servicesButton3 = services.querySelector(".services-button-3");
const servicesDelivery = services.querySelector(".tab-delivery");
const servicesWarranty = services.querySelector(".tab-warranty");
const servicesCredit = services.querySelector(".tab-credit");


slideButton1.addEventListener("click", function (evt) {
  // evt.preventDefault();
  slideButton1.classList.add("current-slide");
  slideButton2.classList.remove("current-slide");
  slideButton3.classList.remove("current-slide");
  slide1.classList.add("slide-active");
  slide2.classList.remove("slide-active");
  slide3.classList.remove("slide-active");
});

slideButton2.addEventListener("click", function (evt) {
    // evt.preventDefault();
    slideButton2.classList.add("current-slide");
    slideButton1.classList.remove("current-slide");
    slideButton3.classList.remove("current-slide");
    slide2.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide3.classList.remove("slide-active");
  });

  slideButton3.addEventListener("click", function (evt) {
    // evt.preventDefault();
    slideButton3.classList.add("current-slide");
    slideButton1.classList.remove("current-slide");
    slideButton2.classList.remove("current-slide");
    slide3.classList.add("slide-active");
    slide1.classList.remove("slide-active");
    slide2.classList.remove("slide-active");
  });

  servicesButton1.addEventListener("click", function() {
    servicesButton1.classList.add("services-link-active");
    servicesButton2.classList.remove("services-link-active");
    servicesButton3.classList.remove("services-link-active");

    servicesDelivery.classList.add("service-active");
    servicesWarranty.classList.remove("service-active");
    servicesCredit.classList.remove("service-active");
  });

  servicesButton2.addEventListener("click", function() {
    servicesButton2.classList.add("services-link-active");
    servicesButton1.classList.remove("services-link-active");
    servicesButton3.classList.remove("services-link-active");

    servicesDelivery.classList.remove("service-active");
    servicesWarranty.classList.add("service-active");
    servicesCredit.classList.remove("service-active");
  });

  servicesButton3.addEventListener("click", function() {
    servicesButton3.classList.add("services-link-active");
    servicesButton2.classList.remove("services-link-active");
    servicesButton1.classList.remove("services-link-active");

    servicesDelivery.classList.remove("service-active");
    servicesWarranty.classList.remove("service-active");
    servicesCredit.classList.add("service-active");
  });

