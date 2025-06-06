interface Persona{
    nombre: string,
    apellido: string,
}
let empleado: Persona = {
    nombre: "Bob",
    apellido: "Marley"
}
console.log("empleado: ",empleado);

interface Credecenciales{
    usuario: string,
    password: string,
}
function login(credenciales: Credecenciales): void {
    console.log("Bienvenido: ",credenciales.usuario);
}
let miUsuario: Credecenciales = {
    usuario: "Bob",
    password: "123"
}
login(miUsuario);
//hacer una interface figura que tenga base, altura y tipo de figura (cuadrado, rectangulo)
//se le pase a una funcion segun el tipo que se le pase calcule el area
interface Figura{
    base: number,
    altura: number,
    tipo: string,
}
let figuraCuadrado: Figura = {
    base: 5,
    altura: 5,
    tipo: "cuadrado",
}
let figuraRectangulo: Figura = {
    base: 5,
    altura: 10,
    tipo: "rectangulo",
}
const calcularArea = (figura: Figura): number => {
    if(figura.tipo === "cuadrado"){
        return figura.base * figura.altura;
    }
    if(figura.tipo === "rectangulo"){
        return figura.base * figura.altura;
    }
    return 0;
}

console.log("figuraCuadrado: ",figuraCuadrado);
console.log("figuraRectangulo: ",figuraRectangulo);

