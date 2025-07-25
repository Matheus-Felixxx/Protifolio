const btn = document.querySelector(".btn");

if(btn) {
  btn.onmousemove = function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--eixoX', x + 'px');
    this.style.setProperty('--eixoY', y + 'px');
  };
}