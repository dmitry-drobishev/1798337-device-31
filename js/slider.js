const slider = document.querySelector(".slider");
const slideButton1 = slider.querySelector(".slider-button-1");
const slideButton2 = slider.querySelector(".slider-button-2");
const slideButton3 = slider.querySelector(".slider-button-3");

slideButton1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideButton1.classList.add("current-slide");
  slideButton2.classList.remove("current-slide");
  slideButton3.classList.remove("current-slide");
});

slideButton2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideButton2.classList.add("current-slide");
    slideButton1.classList.remove("current-slide");
    slideButton3.classList.remove("current-slide");
  });

  slideButton3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideButton3.classList.add("current-slide");
    slideButton1.classList.remove("current-slide");
    slideButton2.classList.remove("current-slide");
  });

// slideButton1.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mapPopup.classList.remove("modal-show");
// });

