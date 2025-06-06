console.log("tipos de variables");
console.log("1. variables primitivas");

let mensaje = "Hola, soy un mensaje de prueba";
let edad = 30;
let activo = true;
let vacio = null;
let x; //underfine

console.log("mensaje", mensaje, "tipo de variable: ", typeof mensaje);
console.log("edad", edad, "tipo de variable: ", typeof edad);
console.log("activo", activo, "tipo de variable: ", typeof activo);
console.log("vacio", vacio, "tipo de variable: ", typeof vacio);
console.log("x", x, "tipo de variable: ", typeof x);
console.log("2. variable no primitiva");
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
console.log("apellido", persona.apellido, "tipo de variable: ", typeof persona);
persona.apellido="gonzales";
console.log("apellido", persona.apellido, "tipo de variable: ", typeof persona);

const frutas = ["manzana", "fresa", "naranja"];
console.log("frutas", frutas, "tipo de variable: ", typeof frutas);
const hoy = new Date();
console.log("fecha actual", hoy, "tipo de variable: ", typeof hoy);
console.log("expresines regulares");
const regex =/[a-z]+/;
console.log(regex.test("9999"));

console.log("conversiones");
a = 10;
b = "15";
multiplicacion = a * b;
console.log("a ", a, "tipo de variable: ", typeof a);
console.log("b ", b, "tipo de variable: ", typeof b);
console.log("resultado multiplicacion ", multiplicacion, "tipo de variable: ", typeof multiplicacion);


