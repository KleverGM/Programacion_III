var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    //cambiar edad
    Persona.prototype.cambiarEdad = function (nuevaEdad) {
        this.edad = nuevaEdad;
    };
    return Persona;
}());
var ana = new Persona("Ana", 30);
ana.saludar();
ana.cambiarEdad(31);
ana.saludar();
