let slideIndex = 1; // Initialize slideIndex to 1

// Function to show the slides
function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-item');
  
  // If the slideIndex exceeds the number of slides, reset it to the last slide
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  // If the slideIndex is less than 1, set it to the first slide
  if (n < 1) {
    slideIndex = 1;
  }

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Display the current slide
  slides[slideIndex - 1].style.display = 'block';
}

// Function to move to the previous slide
function prevSlide() {
  showSlides(slideIndex -= 1); // Decrement slideIndex and call showSlides
}

// Function to move to the next slide
function nextSlide() {
  showSlides(slideIndex += 1); // Increment slideIndex and call showSlides
}

// Initially show the first slide
showSlides(slideIndex);
