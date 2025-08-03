document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const imgContainer = card.querySelector('.project-image-container');
    const img = card.querySelector('.project-image');
    
    // Garante que a imagem seja alta o suficiente para o efeito
    card.addEventListener('mouseenter', function() {
      if (img.naturalHeight <= imgContainer.offsetHeight) {
        img.style.minHeight = '200%';
      }
    });
    
    // Reseta a posição quando o mouse sai
    card.addEventListener('mouseleave', function() {
      img.style.transform = 'translateY(0)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const imgContainer = card.querySelector('.project-image-container');
    const img = card.querySelector('.project-image');
    
    // Garante que a imagem seja alta o suficiente para o efeito
    card.addEventListener('mouseenter', function() {
      if (img.naturalHeight <= imgContainer.offsetHeight) {
        img.style.minHeight = imgContainer.offsetHeight * 2 + 'px';
      }
    });
    
    // Reseta quando o mouse sai
    card.addEventListener('mouseleave', function() {
      img.style.transform = 'translateY(0)';
    });
  });
});