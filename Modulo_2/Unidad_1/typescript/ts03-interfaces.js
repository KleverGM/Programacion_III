var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("empleado: ", empleado);
function login(credenciales) {
    console.log("Bienvenido: ", credenciales.usuario);
}
var miUsuario = {
    usuario: "Bob",
    password: "123"
};
login(miUsuario);
var figuraCuadrado = {
    base: 5,
    altura: 5,
    tipo: "cuadrado",
};
var figuraRectangulo = {
    base: 5,
    altura: 10,
    tipo: "rectangulo",
};
console.log("figuraCuadrado: ", figuraCuadrado);
console.log("figuraRectangulo: ", figuraRectangulo);
