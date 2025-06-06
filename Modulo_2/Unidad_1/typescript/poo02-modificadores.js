var Libro = /** @class */ (function () {
    function Libro(nombre, paginas) {
        this.dni = "1234567890";
        this.nombre = nombre;
        this.paginas = paginas;
    }
    Libro.prototype.cantidadPaginas = function () {
        return "Cantidad de paginas del libro es ".concat(this.paginas);
    };
    return Libro;
}());
var myLibro = new Libro("la dama rosa", 100);
console.log(myLibro.nombre);
console.log(myLibro.cantidadPaginas());
