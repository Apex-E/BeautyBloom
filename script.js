// navigation bar funtionality applies here 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }



  // client review slider funtioncality happens 
  let slideIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  
  function showSlides() {
      slides.forEach((slide, index) => {
          slide.style.display = 'none';
      });
      dots.forEach((dot) => {
          dot.classList.remove('active');
      });
  
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
  
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('active');
  
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }
  
  function currentSlide(n) {
      slides.forEach((slide, index) => {
          slide.style.display = 'none';
      });
      dots.forEach((dot) => {
          dot.classList.remove('active');
      });
  
      slideIndex = n;
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      showSlides();
  });

  // contact form functionality applies here 
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        alert('Thank you for getting in touch, ' + name + '! We will respond to you shortly.');
        
        // Here you would typically handle the form submission,
        // e.g., send the data to your server using fetch or XMLHttpRequest
        
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
