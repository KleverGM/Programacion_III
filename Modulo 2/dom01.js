console.log(document.head);

const titulo = document.getElementsBy('titulo');
console.log("elemento titulo", titulo);

const notas = document.getElementsByClassName('notas');
Array.from(notas).forEach(n=>console.log(n.textContent));

const items = document.querySelectorAll('.item');
items.forEach(elemento=>console.log(elemento.textContent));

const mensaje = document.getElementById('mensaje');
console.log(mensaje.textContent);
mensaje.textContent("nuestro h2 se ha actualizado desde JS");
mensaje.style.color = "red";

const enlace = document.getElementById('link');
enlace.textContent("ir a google");
enlace.setAttribute('href'= "https://www.google.com");
