window.addEventListener("load", function () {
  const slider = document.getElementById("image-slider");

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
});

// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("open");
}

// Close menu when a link is clicked (on mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });
});
