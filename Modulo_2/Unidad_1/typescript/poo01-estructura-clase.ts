class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar():void{
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
    //cambiar edad
    cambiarEdad(nuevaEdad: number): void {
        this.edad = nuevaEdad;
    }
}

const ana = new Persona("Ana", 30);
ana.saludar();
ana.cambiarEdad(31);
ana.saludar();

