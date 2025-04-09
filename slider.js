window.addEventListener("load", function () {
  const slider = document.getElementById("image-slider");

  if (!slider) {
    console.error("Slider element not found");
    return;
  }

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
    console.log("Switched to:", images[index]);
    index = (index + 1) % images.length;
  }

  showSlide(); // Show first
  setInterval(showSlide, 3000); // Then every 3 seconds
});
