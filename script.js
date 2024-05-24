function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const certificateSlider = document.querySelector('.certificate-slider');

// Function to automatically scroll the slider
function autoScroll() {
    certificateSlider.scrollLeft += 2; // Adjust scroll speed as needed
    if (certificateSlider.scrollLeft >= (certificateSlider.scrollWidth - certificateSlider.offsetWidth)) {
        certificateSlider.scrollLeft = 0;
    }
}

// Interval for auto-scrolling
setInterval(autoScroll, 50); // Adjust scrolling interval as needed


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Optional: Stop animation on hover
document.addEventListener('DOMContentLoaded', () => {
  const certificateSlider = document.querySelector('.certificate-slider');
  certificateSlider.addEventListener('mouseenter', () => {
      certificateSlider.style.animationPlayState = 'paused';
  });
  certificateSlider.addEventListener('mouseleave', () => {
      certificateSlider.style.animationPlayState = 'running';
  });
});

