class Figura {
    calcularArea() {
        return 0;
    }
}
class circulo extends Figura {
    _radio;
    constructor(radio) {
        super(); // Llamar al constructor de la clase padre
        this._radio = radio;
    }
    calcularArea() {
        return Math.PI * this._radio**2;
    }
}
class rectangulo extends Figura {
    _ancho;
    _alto;
    constructor(ancho, alto) {
        super(); // Llamar al constructor de la clase padre
        this._ancho = ancho;
        this._alto = alto;
    }
    calcularArea() {
        return this._ancho * this._alto;
    }
}
const miCirculo = new circulo(5);
console.log(miCirculo.calcularArea());
const miRectangulo = new rectangulo(4, 6);
console.log(miRectangulo.calcularArea());


class cuadrado extends Figura {
    _lado;
    constructor(lado) {
        super();
        this._lado = lado;
    }
    calcularArea() {
        return this._lado**2;
    }
}
const miCuadrado = new cuadrado(4);
   