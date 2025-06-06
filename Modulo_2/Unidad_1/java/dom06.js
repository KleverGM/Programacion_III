function mostraralerta() {
    alert("este boton usa un evento en linea");
}

function agregarproducto() {
   const ul = document.getElementById('listaproductos1');
   const li = document.createElement('li');
   li.textContent = "producto sagregado desde un evento en linea";
   ul.appendChild(li);
}

document.getElementById('boton').addEventListener('click', () => {
    alert('¡click detectado!');
});

document.getElementById('campo').addEventListener('input', (e) => {
    console.log('escribiendo:', e.target.value);
});

document.getElementById('btnagregar').addEventListener('click', () => {
    const ul = document.getElementById('listaproductos2');
    const li = document.createElement('li');
    li.textContent = "item agregado desde un evento con addEventListener";
    ul.appendChild(li);
});
