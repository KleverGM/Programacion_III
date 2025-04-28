const persona ={
    nombre: "Carlos", 
    apellido: "Pérez",
    edad: 30,
    direccion: "av. amazonas",
    telefono: "123-456-7890"
}
console.log("nombre", persona["nombre"]);
console.log( "apellido : ", persona["apellido"]);

console.log("ciclo for in ")
for (const clave in persona) {
    console.log(clave, " : ", persona[clave])
}

const producto = {
    nombre: "Laptop", precio: 1200, categoria: "Electrónica"
}
for (const clave in producto){
    console.log(clave, " : ", producto[clave])
}
