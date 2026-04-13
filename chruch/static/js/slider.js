<script>
document.addEventListener("DOMContentLoaded", function () {

  let currentIndex = 0;

  const slides = document.querySelector('.slides');
  const persons = document.querySelectorAll('.person');
  const slider = document.querySelector('.slider');

  if (!slides || persons.length === 0 || !slider) {
    console.log("Slider elements not found");
    return;
  }

  function autoSlide() {
    const slideWidth = slider.clientWidth;

    currentIndex++;

    if (currentIndex >= persons.length) {
      currentIndex = 0;
    }

    slides.style.transform = "translateX(-" + (currentIndex * slideWidth) + "px)";
  }

  setInterval(autoSlide, 2000); // 2 seconds
});
</script>