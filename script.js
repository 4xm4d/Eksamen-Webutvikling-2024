document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Forhindre standard lenkeoppførsel
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const intervalTime = 5000; // 5 sekunder
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length; // Gå til neste bilde
      showSlide(currentIndex);
    }
  
    // Start slideren
    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
  
    // Knappene for manuelt bildebytte
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
  
      nextButton.addEventListener("click", () => {
        nextSlide();
      });
    }
  });
  