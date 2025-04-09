window.addEventListener("load", function () {
  const slider = document.getElementById("image-slider");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  const images = [
    "images/slide1.png",
    "images/slide2.png",
    "images/slide3.png",
    "images/slide4.png",
    "images/slide5.png",
    "images/slide6.png"
  ];

  let index = 0;

  function showSlide() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  showSlide();
  setInterval(showSlide, 3000);

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
