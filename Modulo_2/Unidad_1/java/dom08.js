document.getElementById('agregar').addEventListener('click', () => {
    const texto = document.getElementById('tarea').value;
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listatareas').appendChild(li);
        document.getElementById('tarea').value = ''; // Limpiar el campo de entrada
}
});