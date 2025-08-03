document.addEventListener('DOMContentLoaded', function() {
  const flagContainer = document.querySelector('.flag-container');
  const usaFlag = document.getElementById('usa-flag');
  const brazilFlag = document.getElementById('brazil-flag');
  
  flagContainer.addEventListener('click', function() {
    usaFlag.classList.toggle('active');
    brazilFlag.classList.toggle('active');
  });
});