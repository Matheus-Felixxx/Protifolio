// Menu Hambúrguer
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Navegação suave
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      // Fechar menu hambúrguer
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      
      // Scroll suave com offset para o header
      window.scrollTo({
        top: targetElement.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  });
});