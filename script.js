// Function to slide the images
function slideImages() {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider-container');
    const images = sliderContainer.querySelectorAll('img');
    const dots = slider.querySelectorAll('.dot');
    let currentIndex = 0;
  
    function updateSliderPosition() {
      const slideWidth = slider.offsetWidth;
      const newPosition = -currentIndex * slideWidth;
      sliderContainer.style.transform = `translateX(${newPosition}px)`;
    }
  
    function setActiveDot() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    function handleDotClick(index) {
      currentIndex = index;
      updateSliderPosition();
      setActiveDot();
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClick(index));
    });
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSliderPosition();
      setActiveDot();
    }, 3000); // Change slide every 3 seconds
  
    // Initialize slider position and active dot
    updateSliderPosition();
    setActiveDot();
  }

  // Call the slideImages function when the page is loaded
  window.addEventListener('load', slideImages);



  const images = Array.from(document.querySelectorAll('.featured_in div'));
  let currentIndex = 0;

  function rotateImages() {
    images.forEach((image, index) => {
      if (index >= currentIndex && index < currentIndex + 4) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }

  setInterval(rotateImages, 3000);


  const hideButton = document.querySelector(".close_button");
const layer2 = document.querySelector(".nav_layer1");

hideButton.addEventListener("click", function() {
  layer2.style.display = "none";
});

  const hideButton2 = document.querySelector("#popupbutton");
const layer3 = document.querySelector(".popup");

hideButton2.addEventListener("click", function() {
  layer3.style.display = "none";
});