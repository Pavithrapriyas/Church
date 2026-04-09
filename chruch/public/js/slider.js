
    let currentIndex = 0;
    const slideWidth = 480;
    const imagesPerSlide = 3;
    const slides = document.querySelector(".slides");
    const totalImages = document.querySelectorAll(".slides img").length;

    function moveSlide(direction) {
      currentIndex += direction;

      const maxIndex = Math.floor(totalImages / imagesPerSlide) - 1;

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      slides.style.transform =
        `translateX(-${currentIndex * slideWidth * imagesPerSlide}px)`;
    }
  