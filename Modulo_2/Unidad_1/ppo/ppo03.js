class Animal {
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }
    hacerSonido() {
        console.log("sonido de animal");
    }
}

class Perro extends Animal {
    caminar() {
        console.log("perro camninando");
    }
}
const miPerro = new Perro("Firulais");
miPerro.hacerSonido();
miPerro.caminar();
const miGato = new Animal("Michi");
gato.hacerSonido();
gato.caminar();