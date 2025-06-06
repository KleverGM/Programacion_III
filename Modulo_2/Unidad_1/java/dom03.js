const msg = document.getElementById('mensaje');
msg.textContent = "actualizado";
msg.style.color = "red";
const link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com');
link.classList.add('boton');
link