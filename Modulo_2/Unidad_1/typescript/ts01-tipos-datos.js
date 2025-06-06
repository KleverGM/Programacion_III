var cantidad = 19;
var nombre = "Juan";
var opcion = true;
console.log("cantidad: ", cantidad);
console.log("nombre: ", nombre);
console.log("opcion: ", opcion);
var opcional = "comodin any";
opcional = 100;
//tipos de datos compuestos
var equipos = ["Barcelona, Real Madrid, Manchester City, Bayern Munich"];
console.log("equipos: ", equipos);
var edades = [19, 20, 21, 22, 23, 24, 25];
console.log("edades: ", edades);
//tuplas
var persona = ["Juan", 19];
console.log("Alumno: ", persona);
//enums
var Estados;
(function (Estados) {
    Estados[Estados["PENDIENTE"] = 0] = "PENDIENTE";
    Estados[Estados["ENVIADO"] = 1] = "ENVIADO";
    Estados[Estados["ENTREGADO"] = 2] = "ENTREGADO";
})(Estados || (Estados = {}));
var miestado = Estados.ENTREGADO;
console.log(miestado);
