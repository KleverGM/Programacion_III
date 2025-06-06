function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}

console.log(saludar("Betty Marmol")); 

//parametros opcionales
function obtenerApellido(apellido?: string){
    return `Mi apellido es: ${apellido ?? "invitado"}`;
}
console.log(obtenerApellido("Picapiedra"));
console.log(obtenerApellido()); 

//parametros por defecto
function obtenerEdad(edad: number = 18): string {
    return `Mi edad es: ${edad}`;
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

//funciones de flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("la sumas es: ",sumar(5, 10));

function mostrarInformacion(informcacion: string): void {
    console.log(informcacion);
}
mostrarInformacion("Suceso en norte de quito");

//tipar funciones como variables
let operacion: (x: number, y: number) => number;
operacion = function(a, b) {
    return a + b;
}
console.log("resultado suma: ",operacion(5, 10));

//funciones que reciba un arreglo string y salude a cada persona
function saludarPersonas(personas: string[]): void {
    personas.forEach((persona) => {
        console.log(`Hola ${persona}`);
    });
}
const personas = ["Pedro", "Juan", "Maria"];
saludarPersonas(personas);

