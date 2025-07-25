// script/slide.js
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.slide-up-hidden');

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // When 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('slide-up-hidden');
        entry.target.classList.add('slide-up');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});