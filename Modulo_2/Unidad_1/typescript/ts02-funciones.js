function saludar(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludar("Betty Marmol"));
//parametros opcionales
function obtenerApellido(apellido) {
    return "Mi apellido es: ".concat(apellido !== null && apellido !== void 0 ? apellido : "invitado");
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido());
//parametros por defecto
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "Mi edad es: ".concat(edad);
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
//funciones de flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("la sumas es: ", sumar(5, 10));
function mostrarInformacion(informcacion) {
    console.log(informcacion);
}
mostrarInformacion("Suceso en norte de quito");
//tipar funciones como variables
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("resultado suma: ", operacion(5, 10));
//funciones que reciba un arreglo string y salude a cada persona
function saludarPersonas(personas) {
    personas.forEach(function (persona) {
        console.log("Hola ".concat(persona));
    });
}
var personas = ["Pedro", "Juan", "Maria"];
saludarPersonas(personas);
