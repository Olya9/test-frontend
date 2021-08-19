const toggleSlider = () => {
  const slider = document.querySelector(".slider");
  const sliderArrowPrev = slider.querySelector(".slider__arrow_prev");
  const sliderArrowNext = slider.querySelector(".slider__arrow_next");

  let slideIndex = 1;
  const showSlides = (n) => {
    const slides = slider.querySelectorAll(".slider__block");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slider.querySelector(".slider__big-num").textContent = slideIndex;
    }
    slides[slideIndex - 1].style.display = "block";
  };
  showSlides(slideIndex);
  const plusSlide = () => {
    showSlides((slideIndex += 1));
  };
  const minusSlide = () => {
    showSlides((slideIndex -= 1));
  };

  sliderArrowPrev.addEventListener("click", minusSlide);
  sliderArrowNext.addEventListener("click", plusSlide);
};

toggleSlider();
