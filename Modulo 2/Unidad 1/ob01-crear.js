//manipulacion de objetos
let alumno = {
    nombre: "Juan",
    apellido: "Pérez",
    direccion: "Av. amazonas",
    telefono: "0987654321"
}
console.log(alumno);
console.log("nombre del alumno",alumno.nombre);
console.log("apellido del alumno",alumno["apellido"]);

//acceder a propiedades
console.log("nombre del alumno",alumno.nombre);
console.log("apellido del alumno",alumno["apellido"]);

//modificar propiedades
alumno.nombre = "Pedro";
alumno["direccion"] = "Av. 10 de agosto";
console.log(alumno);

//agregar propiedades
alumno.promedio = 9;
console.log(alumno);

//eliminar propiedades
delete alumno.promedio;
console.log(alumno);

alumnoclonado = alumno; //copiar objeto por referencia
alumnoclonado.nombre = "Maria"; //modificar objeto
alumno.apellido = "Gonzalez";
console.log(alumnoclonado);

//multipicar precio unitario cantidad y sumar iva
//y asignar el valor subtotal
item = {
    preciounitario: 23,
    cantidad: 3,
    iva: 3.4,
    nombre: "laptop",
    subtotal: 0 
}
item= item.preciounitario * item.cantidad + item.iva;
console.log(item);

//recorrer con for
for (let clave in item) {
    console.log(cla, item[clave]);
}

//listar las claves
console.log(Object.keys(item));
//listar los valores
console.log(Object.values(item));

//funciones en objetos
usuario = {
    nombre: "Luis",
    saludar: function() {
        return "Hola soy " + this.nombre;
    }
}
console.log(usuario.saludar());

//objetos anidados
categoria = {
    nombre: "electronica",
    productos: ["laptop", "monitor", "teclado", { cantidad: 12, marca: "sony"}],
    descripcion: {
        capacidad: "16hz",
        tamaño: "15pulgadas"
    }
}
console.log(categoria);


