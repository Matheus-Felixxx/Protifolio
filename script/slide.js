
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-up-visible');
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  });

  document.querySelectorAll('.slide-up-hidden').forEach((el) => observer.observe(el));

